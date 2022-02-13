// file: src/store/root/Root.store.ts

// import our root store interface
import { RootStoreInterface } from './models'

// import our items slice and store
import { useItemsStore } from '../items/'

// hook that returns our root store instance and will allow us to consume our app store from our components
export function useAppStore(): RootStoreInterface {
  return {
    itemsStore: useItemsStore(),
    // additional domain store modules will be eventually added here
  }
}
