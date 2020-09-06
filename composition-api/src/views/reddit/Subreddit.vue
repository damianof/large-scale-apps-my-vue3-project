<template>
  <div class="subreddit">
    <h1>Subreddit: {{ subredditKey }}</h1>
    <SubredditComponent 
      :loading="loading" 
      :model="subreddit"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue'
  import { store } from '@/store'
  import { MutationType, StoreModuleNames } from '@/models/store'
  import { SubredditInterface, ListingItemInterface } from '@/models/reddit'
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
        console.log('props.subredditKey', props.subredditKey)
      
        store.dispatch(
          `${StoreModuleNames.redditState}/${MutationType.reddit.loadSubreddit}`, props.subredditKey
        )
      })

      // const onSelectItem = (item: ListingItemInterface) => {
      //   store.dispatch(
      //     `${StoreModuleNames.redditState}/${MutationType.items.selectItem}`,
      //     {
      //       id: item.id,
      //       selected: !item.selected
      //     }
      //   )
      // }

      return {
        subreddit,
        loading,
        //onSelectItem
      }
    }
  })

  //export default defineComponent(SubredditView)
</script>
