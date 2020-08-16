import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from '@/models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/path/to/your/real/api/and-point'
}

// instantiate the ItemsApiClient pointing at the url that returns the live data from an API server
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// export our instance
export default itemsApiClient
