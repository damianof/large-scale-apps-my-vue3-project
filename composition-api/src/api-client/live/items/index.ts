import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from '@/models/api-client/items'

import { config } from '@/config'

// TODO: Book: update chapter
// const urls: ItemsApiClientUrlsInterface = {
//   fetchItems: '/path/to/your/real/api/and-point'
// }
const urls: ItemsApiClientUrlsInterface = config.items.apiUrls

// instantiate the ItemsApiClient pointing at the url that returns the live data from an API server
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// export our instance
export default itemsApiClient
