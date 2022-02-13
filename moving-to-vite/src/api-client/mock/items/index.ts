// file: src/api-client/mock/items/index.ts

import { 
  ItemsApiClientUrlsInterface, 
  ItemsApiClientInterface, 
  ItemsApiClientModel 
} from '../../../models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/static/data/items.json'
}

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel({ 
  urls,
  mockDelay: 1000 // simulate a delay so we can see our loader
})

// export our instance
export {
  itemsApiClient
}
