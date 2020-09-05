import { 
  ItemsApiClientUrlsInterface,
  RedditApiClientUrlsInterface
} from '@/models/api-client'

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
  reddit: {
    apiUrls: RedditApiClientUrlsInterface
  }
}
