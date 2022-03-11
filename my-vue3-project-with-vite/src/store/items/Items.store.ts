// file: src/store/items/Items.store.ts

// import a reference to Vue's reactive
import { reactive } from 'vue'

// import interfaces references 
import {
  ItemsStateInterface
} from './models'
// import a reference to our ItemInterface
import { ItemInterface } from '@/models'

// import a reference to our apiClient instance
import { apiClient } from '@/api-client'

const itemsState = reactive<ItemsStateInterface>({
  loading: false,
  items: []
})

// our items store actions implementation:
const actions = {

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

  // action that we'll invoke from our component to select a specific item
  selectItem: async (params: {
    id: number
    selected: boolean
  }) => {
    console.log('ItemsStore: action: selectItem', params)
    const { id, selected } = params
    const item = (itemsState.items || []).find(o => o.id === id)
    if (item) {
      item.selected = selected
    }
  }
}

// our items store getters implementation:
const getters = {
  get loading() {
    return itemsState.loading
  },
  get items() {
    return itemsState.items
  }
}

// infer interface for our store:
export interface ItemsStoreInterface {
  getters: typeof getters
  actions: typeof actions
}

// hook to allows us to consume the ItemsStore instance in our components
export function useItemsStore(): ItemsStoreInterface {
  // return our store intance implementation
  return {
    getters,
    actions
  }
}
