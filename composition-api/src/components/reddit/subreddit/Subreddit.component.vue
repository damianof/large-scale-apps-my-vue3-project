<template>
  <div>
    Type: {{ model.kind }}
    Children: {{ model.data.children.length }}
    <ListingItemsList 
      :loading="loading" 
      :items="model.data.children"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { SubredditInterface, ListingItemInterface } from '@/models/reddit'
  import ListingItemsList from './children/ListingItemsList.component.vue'
  import Loader from '@/components/shared/Loader.component.vue'
  import { useI18n } from 'vue-i18n'

  export default defineComponent({
    components: {
      ListingItemsList,
      Loader
    },
    props: {
      model: {
        type: Object as PropType<SubredditInterface>
      },
      loading: {
        type: Boolean
      }
    },
    setup(props, { emit }) {
      const i18n = useI18n()

      const onItemSelect = (item: ListingItemInterface) => {
        emit('selectItem', item)
      }

      return {
        i18n,
        onItemSelect
      }
    }
  })
</script>
