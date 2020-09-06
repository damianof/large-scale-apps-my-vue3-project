<template>
  <div class="subreddit">
    <div class="nav">
      <router-link to="/r">reddit</router-link>: /r/{{ subredditKey }}
    </div>
    <SubredditComponent 
      :loading="loading" 
      :model="subreddit"
      @permalinkClicked="onPermalinkClicked"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue'
  import router from '@/router'
  import { store } from '@/store'
  import { MutationType, StoreModuleNames } from '@/models/store'
  import { SubredditInterface } from '@/models/reddit'
  import SubredditComponent from '@/components/reddit/subreddit/Subreddit.component.vue'

  export default defineComponent({
    name: 'Subreddit',
    components: {
      SubredditComponent
    },
    props: {
      subredditKey: {
        type: String
      }
    },
    setup(props) {
      const subreddit = computed(() => {
        return store.state.redditState.subreddit
      })
      const loading = computed(() => {
        return store.state.redditState.loading
      })

      onMounted(() => {
        store.dispatch(
          `${StoreModuleNames.redditState}/${MutationType.reddit.loadSubreddit}`, props.subredditKey
        )
      })

      const onPermalinkClicked = (permalink: string) => {
        // permalink will be soomething like '/r/vuejs/comments/imseqc/learn_vue_3_with_typescript_by_building_a_project/'

        // permalinkParts: this will be an array like ["", "r", "vuejs", "comments", "imseqc", "learn_vue_3_with_typescript_by_building_a_project", ""]
        const permalinkParts = permalink.split('/')

        // extract our params to pass to our route
        const subreddit = permalinkParts[2]
        const typeid = permalinkParts[3]
        const userid = permalinkParts[4]
        const postid = permalinkParts[5]
        // build path with params to navigate to SubredditPost.vue
        const path = `/r/${ subreddit }/${ typeid }/${ userid }/${ postid }`
        router.push(path)
      }

      return {
        subreddit,
        loading,
        onPermalinkClicked
      }
    }
  })

  //export default defineComponent(SubredditView)
</script>
