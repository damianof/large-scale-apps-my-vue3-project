import { ItemsApiClientUrlsInterface } from '@/models/api-clients/items'

/**
 * @Name ConfigInterface
 * @description
 *
 */
export interface ConfigInterface {
  global: {
    // ... things that are not specific to a single app domain
  }
  items: {
    apiUrls: ItemsApiClientUrlsInterface
  }
}
