<template>
  <div>
    <h3>{{ i18n.t('reddit.subreddit.list.header') }}:</h3>
    <Loader :show="loading" />
    <ul v-show="!loading">
      <ListingItemComponent
        v-for="item in items"
        :key="item.data.id"
        :model="item.data"
        @select="onItemSelect"
      />
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { ListingItemInterface } from '@/models/reddit'
  import ListingItemComponent from './ListingItem.component.vue'
  import Loader from '@/components/shared/Loader.component.vue'
  import { useI18n } from 'vue-i18n'

  export default defineComponent({
    components: {
      ListingItemComponent,
      Loader
    },
    props: {
      items: {
        type: Array as PropType<ListingItemInterface[]>
      },
      loading: {
        type: Boolean
      }
    },
    setup(props, { emit }) {
      const i18n = useI18n()

      // const onItemSelect = (item: ListingItemInterface) => {
      //   emit('selectItem', item)
      // }

      return {
        i18n,
        //onItemSelect
      }
    }
  })
</script>
