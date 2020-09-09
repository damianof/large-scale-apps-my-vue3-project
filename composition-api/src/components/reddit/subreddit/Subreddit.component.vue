<template>
  <div>
    Count: {{ children.length }}
    <ListingItemsList 
      :loading="loading" 
      :items="children"
      @permalinkClicked="onPermalinkClicked" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { SubredditInterface } from '@/models/reddit'
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

      const children = computed(() => {
        return props.model?.data.children
      })

      const onPermalinkClicked = (permalink: string) => {
        emit('permalinkClicked', permalink)
      }

      return {
        i18n,
        children,
        onPermalinkClicked
      }
    }
  })
</script>
