<template>
  <div>
    <h3>{{ i18n.t('items.list.header') }}:</h3>
    <Loader v-show="loading" />
    <ul v-show="!loading">
      <ItemComponent v-for="(item, index) in items" 
        :key="item.id" 
        :isLast="index === items.length-1" 
        :model="item" @select="onItemSelect" />
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { ItemInterface } from '@/models/items/Item.interface'
  import ItemComponent from './children/Item.component.vue'
  import Loader from '@/components/shared/Loader.component.vue'
  import { useI18n } from 'vue-i18n'

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
      const i18n = useI18n()

      const onItemSelect = (item: ItemInterface) => {
        emit('selectItem', item)
      }

      return {
        i18n,
        onItemSelect
      }
    }
  })
</script>
