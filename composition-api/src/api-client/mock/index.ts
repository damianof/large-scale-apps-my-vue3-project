import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import itemsApiClient from '@/api-client/mock/items'
import redditApiClient from '@/api-client/mock/reddit'

// create an instance of our main ApiClient that wraps the mock child clients
const apiMockClient: ApiClientInterface = {
  items: itemsApiClient,
  reddit: redditApiClient
}
// export our instance
export default apiMockClient
