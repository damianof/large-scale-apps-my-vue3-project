// file: src/store/items/Items.store.ts

// import a reference to Vue's reactive
import { reactive } from 'vue'

// import references to our itesms tore and actions interfaces
import { 
  ItemsStateInterface, 
  ItemsStoreInterface, 
  ItemsStoreActionsInterface,
  ItemsStoreGettersInterface
} from './models'
// import a reference to our ItemInterface
import { ItemInterface } from '../../models/items/Item.interface'

// import a reference to our apiClient instance
import { apiClient } from '../../api-client'

/**
 * @name itemsState
 * @description reactive Vue state that we use to implement our custom store
 */ 
const itemsState = reactive<ItemsStateInterface>({
  loading: false,
  items: []
})

// hook to allows us to consume the ItemsStore instance in our components
export function useItemsStore(): ItemsStoreInterface {

  // our items store actions implementation:
  const actions: ItemsStoreActionsInterface = {

    // action that we invoke to load the items from an api:
    loadItems: async () => {
      // set loading to true and clear current data:
      itemsState.loading = true
      itemsState.items = []

      // invoke our API cient fetchItems to load the data from an API end-point
      const data = await apiClient.items.fetchItems()

      // set items data and loading to false
      itemsState.items = data
      itemsState.loading = false
    },

    // action we invoke to toggle an item.selected property 
    toggleItemSelected: async (item: ItemInterface) => {
      console.log('ItemsStore: action: toggleItemSelected', item)
      // update our state
      
      const itemIndex = (itemsState.items || []).findIndex(a => a.id === item.id)
      if (itemIndex < 0) {
        console.warn('ItemsStore: action: toggleItemSelected: Could not find item in our state')
        return
      }
      // toggle selected
      const stateItem = itemsState.items[itemIndex]
      stateItem.selected = !stateItem.selected
    }
  }

  // our items store getters implementation:
  const getters: ItemsStoreGettersInterface = {
    get loading() {
      return itemsState.loading
    },
    get items() {
      return itemsState.items
    }
  }

  // return our store intance implementation
  return {
    getters,
    actions
  }
}