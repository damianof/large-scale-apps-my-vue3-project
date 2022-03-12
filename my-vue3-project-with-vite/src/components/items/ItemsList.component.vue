<template>
  <div>
    <h3>{{ t('items.list.header') }}:</h3>
    <Loader v-show="loading" />
    <ul v-show="!loading">
      <ItemComponent
        v-for="(item, index) in items"
        :key="item.id"
        :isLast="index === items.length - 1"
        :model="item"
        @select="onItemSelect"
      />
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import ItemComponent from './children/Item.component.vue'
  import Loader from '@/components/shared/Loader.component.vue'

  import { ItemInterface } from '@/models'
  import { useLocalization } from '@/localization/useLocalization'

  export default defineComponent({
    name: 'ItemsListComponent',
    components: {
      ItemComponent,
      Loader
    },
    props: {
      items: {
        type: Array as PropType<ItemInterface[]>,
        default: () => []
      },
      loading: {
        type: Boolean
      }
    },
    emits: ['selectItem'],
    setup(props, { emit }) {
      const { t } = useLocalization()

      const onItemSelect = (item: ItemInterface) => {
        emit('selectItem', item)
      }

      return {
        t,
        onItemSelect
      }
    }
  })
</script>
