<template>
  <div class="home">
    <ItemsListComponent :items="items" :loading="loading" @selectItem="onSelectItem" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue'
  import ItemsListComponent from '../components/items/ItemsList.component.vue'
  import { ItemInterface } from '../models/items/Item.interface'
    // import our useAppStore hook from our store
  import { useAppStore } from '../store'

  export default defineComponent({
    name: 'ItemsView',
    components: {
      ItemsListComponent
    },
    setup() {
      // private:
      const { itemsStore } = useAppStore()

      // computed:
      const items = computed(() => {
        return itemsStore.getters.items
      })
      const loading = computed(() => {
        return itemsStore.getters.loading
      })

      // methods:
      const onSelectItem = (item: ItemInterface) => {
        itemsStore.actions.toggleItemSelected(item)
      }

      // lifecycle onMounted hook: use to dispatch our loadItems action to our itemsStore
      onMounted(() => {
        // invoke our store action to load the items
        itemsStore.actions.loadItems()
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
