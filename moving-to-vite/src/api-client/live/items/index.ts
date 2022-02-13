// file: src/api-client/live/items/index.ts

import { 
  ItemsApiClientUrlsInterface, 
  ItemsApiClientInterface, 
  ItemsApiClientModel 
} from '../../../models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
  // this should be pointing to your live API end-point
  fetchItems: 'https://yourapi-endpoint...'
}

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel({ urls })

// export our instance
export {
  itemsApiClient
}
