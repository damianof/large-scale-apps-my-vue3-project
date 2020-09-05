import {
  RedditApiClientUrlsInterface,
  RedditApiClientInterface,
  RedditApiClientModel
} from '@/models/api-client'

import { config } from '@/config'

// urls for this API client
const urls: RedditApiClientUrlsInterface = config.reddit.apiUrls

// instantiate the RedditApiClient pointing at the url that returns static json mock data
const redditApiClient: RedditApiClientInterface = new RedditApiClientModel(urls)
// export our instance
export default redditApiClient
