import { rootStore, dispatchModuleAction } from '../root'
import { StoreModuleNames, ItemsStateInterface } from '@/models/store'

/**
 * @name itemsStore
 * @description
 * The items store wrapper that returns the itemsState and exposes a generic action<T> method
 */
const itemsStore = {
  get state(): ItemsStateInterface {
    return rootStore.state.itemsState
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.itemsState, actionName, params)
  }
}
// export our wrapper using the composition API convention (i.e. useXYZ)
export const useItemsStore = () => {
  return itemsStore
}
