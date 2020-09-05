// GEN-IMPORTS
import { ItemsApiClientInterface } from '../api-client/items'
import { RedditApiClientInterface } from '../api-client/reddit'

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface ApiClientInterface {
  // GEN-PROPERTIES
  items: ItemsApiClientInterface
  reddit: RedditApiClientInterface
}
