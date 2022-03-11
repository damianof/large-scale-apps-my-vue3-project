// file: src/api-client/live/index.ts

import { ApiClientInterface } from '../models'
// import module instances
import { localizationApiClient } from './localization'
import { itemsApiClient } from './items'

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: ApiClientInterface = {
  localization: localizationApiClient,
  items: itemsApiClient
}
// export our instance
export { apiLiveClient }
