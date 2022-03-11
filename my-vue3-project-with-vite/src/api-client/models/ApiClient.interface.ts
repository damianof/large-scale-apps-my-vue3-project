// file: src/api-client/models/ApiClient.interface.ts

import { LocalizationApiClientInterface } from './localization'
import { ItemsApiClientInterface } from './items'

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface ApiClientInterface {
  localization: LocalizationApiClientInterface
  items: ItemsApiClientInterface
}
