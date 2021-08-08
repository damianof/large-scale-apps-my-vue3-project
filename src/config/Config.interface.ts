import { ItemsApiClientUrlsInterface } from '@/models/api-client/items'
import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface'
import { ThemeInfoInterface } from 'my-component-library'

/**
 * @Name ConfigInterface
 * @description
 *
 */
export interface ConfigInterface {
  global: {
    // ... things that are not specific to a single app domain
  }

  locales: LocaleInfoInterface[]

  themes: ThemeInfoInterface[]

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
