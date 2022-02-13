// file: RootStore.interface.ts

import { ItemsStoreInterface } from '../../items/models/ItemsStore.interface'

/**
 * @name RootStateInterface
 * @description Interface represents our global state manager
 */
export interface RootStoreInterface {
  itemsStore: ItemsStoreInterface
  // additional domain store modules will be eventually added here
}
