<template>
  <div class="home">
    <ItemsListComponent :items="items" :loading="loading" @selectItem="onSelectItem" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue'
  import { useItemsStore } from '@/store/items'
  import { MutationType, StoreModuleNames } from '@/models/store'
  import ItemsListComponent from '@/components/items/ItemsList.component.vue'
  import { ItemInterface } from '@/models/items/Item.interface'

  export default defineComponent({
    name: 'Home',
    components: {
      ItemsListComponent
    },
    setup() {
      // private:
      const itemsStore = useItemsStore()

      // computed:
      const items = computed(() => {
        return itemsStore.state.items
      })
      const loading = computed(() => {
        return itemsStore.state.loading
      })

      // methods:
      const onSelectItem = (item: ItemInterface) => {
        itemsStore.action(MutationType.items.selectItem, {
          id: item.id,
          selected: !item.selected
        })
      }

      // lifecycle event handlers:
      onMounted(() => {
        itemsStore.action(MutationType.items.loadItems)
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
