// file: src/models/api-client/ApiClient.interface.ts

import { ItemsApiClientInterface } from './items'

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface ApiClientInterface {
  items: ItemsApiClientInterface
}
