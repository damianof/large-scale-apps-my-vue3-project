import { ItemsStateInterface } from '@/models/store'

/**
 * @name initialItemsState
 * @description
 * The Items state instance with the initial default values
 */
export const initialItemsState: ItemsStateInterface = {
  loading: false,
  items: []
}
