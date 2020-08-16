<template>
  <div class="home">
    <ItemsListComponent
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue'
  import { store } from '@/store'
  import { MutationType, StoreModuleNames } from '@/models/store'
  import ItemsListComponent from '@/components/items/ItemsList.component.vue'
  import { ItemInterface } from '@/models/items/Item.interface'

  const HomeView = {
    name: 'Home',
    components: {
      ItemsListComponent
    },
    setup() {
      const items = computed(() => {
        return store.state.itemsState.items
      })
      const loading = computed(() => {
        return store.state.itemsState.loading
      })

      onMounted(() => {
        store.dispatch(`${StoreModuleNames.itemsState}/${MutationType.items.loadItems}`)
      })

      const onSelectItem = (item: ItemInterface) => {
        store.dispatch(`${StoreModuleNames.itemsState}/${MutationType.items.selectItem}`, {
          id: item.id,
          selected: !item.selected
        })
      }

      return {
        items,
        loading,
        onSelectItem
      }
    }
  }

  export default defineComponent(HomeView)
</script>
