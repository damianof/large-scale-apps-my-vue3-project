// file: src/models/api-client/items/ItemsApiClient.interface.ts

import { ItemInterface } from '../../items/Item.interface'

/**
 * @Name ItemsApiClientInterface
 * @description
 * Interface for the Items api client module
 */
export interface ItemsApiClientInterface {
  fetchItems: () => Promise<ItemInterface[]>
}
