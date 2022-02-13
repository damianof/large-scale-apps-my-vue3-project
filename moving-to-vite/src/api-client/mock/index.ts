// file: src/api-client/mock/index.ts

import { ApiClientInterface } from '../../models/api-client/ApiClient.interface'
import { itemsApiClient } from './items'

// create an instance of our main ApiClient that wraps the mock child clients
const apiMockClient: ApiClientInterface = {
  items: itemsApiClient
}

// export our instance
export {
  apiMockClient
}
