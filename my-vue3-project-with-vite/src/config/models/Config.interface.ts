// file: src/config/models/Config.interface.ts

import { ItemsApiClientUrlsInterface, LocalizationApiClientUrlsInterface } from '@/api-client/models'

export interface HttpClientConfigInterface {
  tokenKey: string
}

/**
 * @Name ConfigInterface
 * @description
 * Describes the structure of a configuration file
 */
export interface ConfigInterface {
  global: {
    // ... things that are not specific to a single app domain
    version: number
  }

  httpClient: HttpClientConfigInterface

  apiClient: {
    type: string
  }

  items: {
    apiUrls: ItemsApiClientUrlsInterface
  }

  localization: {
    apiUrls: LocalizationApiClientUrlsInterface
    locales: { key: string; isDefault: boolean }[]
    localStorageCache: { enabled: boolean; expirationInMinutes: number }
  }
}
