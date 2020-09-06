<template>
  <div class="subreddit">
    <div class="nav">
      <router-link to="/r">reddit</router-link>
      <router-link :to="`/r/${ subredditKey }`">/r/{{ subredditKey }}</router-link>: {{ postId }}
    </div>
    <Loader v-show="loading" />
    <div v-show="!loading"
        v-for="(item, index) in subredditPost"
        :key="index">
      <div v-if="item.data">
        <!-- first item is the main post -->
        <div class="r-subreddit-post main-post" v-if="index === 0" style="outline: solid 1px blue">
          <div v-for="(child, childIndex) in item.data.children" :key="childIndex">
            Main post
            [score: {{ child.data.score }}] {{ child.data.author }}: {{ child.data.title || child.data.body }}
          </div>
        </div>
        <div v-if="index === 1">
          <!-- root comments (CommentComponent will recursve on replies) -->
          <CommentComponent v-for="(child, childIndex) in item.data.children" 
            :key="childIndex" 
            :model="child"
            :level="0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue'

  import { store } from '@/store'
  import { MutationType, StoreModuleNames } from '@/models/store'
  import { SubredditInterface } from '@/models/reddit'
  import Loader from '@/components/shared/Loader.component.vue'
  import CommentComponent from '@/components/reddit/subreddit/SubredditPostComment.component.vue'

  export default defineComponent({
    name: 'Subreddit',
    components: {
      Loader,
      CommentComponent
    },
    props: {
      subredditKey: {
        type: String
      },
      typeId: {
        type: String
      },
      userId: {
        type: String
      },
      postId: {
        type: String
      }
    },
    setup(props) {
      const subredditPost = computed(() => {
        return store.state.redditState.subredditPost
      })
      const loading = computed(() => {
        return store.state.redditState.loadingPost
      })

      onMounted(() => {
        const {
          subredditKey,
          typeId,
          userId,
          postId
        } = props
        
        const path = `/r/${ subredditKey }/${ typeId }/${ userId }/${ postId }`
      
        store.dispatch(
          `${StoreModuleNames.redditState}/${MutationType.reddit.loadSubredditPost}`, path
        )
      })

      return {
        subredditPost,
        loading,
      }
    }
  })
</script>

<style lang="scss">
  $border-color: #3465ff;

  .r-subreddit-post.main-post {
    outline: solid 1px $border-color;
    padding: 20px 10px;
  }
</style>
