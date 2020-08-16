import { 
  HttpClient, 
  HttpRequestParamsInterface 
} from '@/models/http-client'

import { ItemsApiClientUrlsInterface } from './ItemsApiClientUrls.interface'
import { ItemsApiClientInterface } from './ItemsApiClient.interface'
import { ItemInterface } from '@/models/items/Item.interface'

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the ItemsApiClientInterface interface
 */
export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly urls!: ItemsApiClientUrlsInterface

  constructor(urls: ItemsApiClientUrlsInterface) {
    this.urls = urls
  }

  fetchItems(): Promise<ItemInterface[]> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchItems,
      requiresToken: false
    }

    return HttpClient.get<ItemInterface[]>(getParameters)
  }
}
