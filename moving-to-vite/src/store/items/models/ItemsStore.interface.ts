// file: src/store/items/models/ItemsStore.interface.ts

// import a reference to our ItemInterface:
import { ItemInterface } from '../../../models/items/Item.interface'

/**
 * @name ItemsStoreActionsInterface
 * @description Interface represents our Items state actions
 */
export interface ItemsStoreActionsInterface {
  loadItems (): Promise<void>
  toggleItemSelected (item: ItemInterface): Promise<void>
}

/**
 * @name ItemsStoreGettersInterface
 * @description Interface represents our store getters
 * Getters will be used to consume the data from the store.
 */
export interface ItemsStoreGettersInterface {
  loading: boolean
  items: ItemInterface[]
}

/**
 * @name ItemsStoreInterface
 * @description Interface represents our Items store module
 */
export interface ItemsStoreInterface {
  actions: ItemsStoreActionsInterface
  getters: ItemsStoreGettersInterface
}
