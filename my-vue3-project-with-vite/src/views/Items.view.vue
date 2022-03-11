<template>
  <div class="home">
    <ItemsListComponent :items="items" :loading="loading" @selectItem="onSelectItem" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue'
  import { useItemsStore } from '@/store/items'
  import ItemsListComponent from '@/components/items/ItemsList.component.vue'
  import { ItemInterface } from '../models'

  export default defineComponent({
    name: 'Home',
    components: {
      ItemsListComponent
    },
    setup() {
      // private:
      const itemsStore = useItemsStore()
      const { actions: itemsStoreActions } = itemsStore

      // computed:
      const items = computed(() => {
        return itemsStore.getters.items
      })
      const loading = computed(() => {
        return itemsStore.getters.loading
      })

      // methods:
      const onSelectItem = (item: ItemInterface) => {
        itemsStoreActions.selectItem({
          id: item.id,
          selected: !item.selected
        })
      }

      // lifecycle event handlers:
      onMounted(() => {
        itemsStoreActions.loadItems()
      })

      return {
        // computed:
        items,
        loading,
        // methods:
        onSelectItem
      }
    }
  })
</script>
