<template>
  <div>
    <h3>My Items:</h3>
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
      const onItemSelect = (item: ItemInterface) => {
        emit('selectItem', item)
      }

      return {
        onItemSelect
      }
    }
  }

  export default defineComponent(ItemsListComponent)
</script>

<style lang="scss">
  ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
</style>
