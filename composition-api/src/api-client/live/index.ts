import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import itemsApiClient from '@/api-client/live/items'

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient
}
// export our instance
export default apiLiveClient
