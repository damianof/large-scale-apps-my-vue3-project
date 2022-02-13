// file: src/store/items/models/ItemsState.interface.ts

import { ItemInterface } from '../../../models/items/Item.interface'

/**
 * @name ItemsStateInterface
 * @description Interface represnets our Items state
 */
export interface ItemsStateInterface {
  loading: boolean
  items: ItemInterface[]
}
