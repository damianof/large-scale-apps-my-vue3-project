// file: src/api-client/models/items/ItemsApiClient.model.ts

import { httpClient, HttpRequestParamsInterface, HttpRequestType } from '@/http-client'

import { ItemsApiClientUrlsInterface } from './ItemsApiClientUrls.interface'
import { ItemsApiClientInterface } from './ItemsApiClient.interface'
import { ItemInterface } from '@/models'

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the ItemsApiClientInterface interface
 */
export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly urls!: ItemsApiClientUrlsInterface
  private readonly mockDelay: number = 0

  constructor(options: { urls: ItemsApiClientUrlsInterface; mockDelay?: number }) {
    this.urls = options.urls
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay
    }
  }

  fetchItems(): Promise<ItemInterface[]> {
    const requestParameters: HttpRequestParamsInterface = {
      requestType: HttpRequestType.get,
      url: this.urls.fetchItems,
      requiresToken: false
    }

    //return httpClient.request<ItemInterface[]>(requestParameters)

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<ItemInterface[]>(requestParameters)
    } else {
      return new Promise<ItemInterface[]>((resolve) => {
        httpClient.request<ItemInterface[]>(requestParameters).then((data) => {
          setTimeout(() => {
            resolve(data)
          }, this.mockDelay)
        })
      })
    }
  }
}
