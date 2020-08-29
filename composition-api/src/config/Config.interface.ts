import { ItemsApiClientUrlsInterface } from '@/models/api-client/items'

/**
 * @Name ConfigInterface
 * @description
 *
 */
export interface ConfigInterface {
  global: {
    // ... things that are not specific to a single app domain
  }
  httpClient: {
    tokenKey: string
  }
  apiClient: {
    type: string
  }
  items: {
    apiUrls: ItemsApiClientUrlsInterface
  }
}
