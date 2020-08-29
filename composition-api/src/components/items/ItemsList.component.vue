<template>
  <div>
    <h3>{{ i18n.t('items.list.header') }}:</h3>
    <Loader v-show="loading" />
    <ul v-show="!loading">
      <ItemComponent
        v-for="item in items"
        :key="item.id"
        :model="item"
        @select="onItemSelect"
      />
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { ItemInterface } from '@/models/items/Item.interface'
  import ItemComponent from '@/components/items/children/Item.component.vue'
  import Loader from '@/components/shared/Loader.component.vue'
  import { useI18n } from 'vue-i18n'

  const ItemsListComponent = {
    components: {
      ItemComponent,
      Loader
    },
    props: {
      items: {
        type: Array as PropType<ItemInterface[]>
      },
      loading: {
        type: Boolean
      }
    },
    setup(props: any, { emit }: any) {
      const i18n = useI18n()

      const onItemSelect = (item: ItemInterface) => {
        emit('selectItem', item)
      }

      return {
        i18n,
        onItemSelect
      }
    }
  }

  export default defineComponent(ItemsListComponent)
</script>
