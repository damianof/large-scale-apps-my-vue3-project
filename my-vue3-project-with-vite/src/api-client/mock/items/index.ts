// file: src/api-client/mock/items/index.ts

// import a reference to the app config
import { config } from '@/config'

import { ItemsApiClientInterface, ItemsApiClientModel } from '../../models'

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel({
  urls: config.items.apiUrls,
  mockDelay: 1000 // simulate a delay so we can see our loader
})

// export our instance
export { itemsApiClient }
