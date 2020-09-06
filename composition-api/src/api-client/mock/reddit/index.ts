import {
  RedditApiClientUrlsInterface,
  RedditApiClientInterface
} from '@/models/api-client'

import { config } from '@/config'

import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'
import { SubredditInterface } from '@/models/reddit'


// urls for this API client
const urls: RedditApiClientUrlsInterface = config.reddit.apiUrls

// here we override some methods (fetchSubredditPost) in order to
// load some local mocked data a bit differently
const redditApiClient: RedditApiClientInterface = {

  // this is the same as in RedditApiClientModel
  fetchSubreddit(subreddit: string): Promise<SubredditInterface> {
    const url = urls.fetchSubreddit.replace('[key]', subreddit)

    const getParameters: HttpRequestParamsInterface = {
      url: url,
      requiresToken: false
    }

    return HttpClient.get<SubredditInterface>(getParameters)
  },

  // here we override fetchSubredditPost to modify the permalink so we load the data from the local mocked data static .json files
  fetchSubredditPost(permalink: string): Promise<SubredditInterface[]> {
    // permalink will be soomething like '/r/vuejs/comments/imseqc/learn_vue_3_with_typescript_by_building_a_project/'
    
    // permalinkParts: this will be an array like ["", "r", "vuejs", "comments", "imseqc", "learn_vue_3_with_typescript_by_building_a_project", ""]
    const permalinkParts = permalink.split('/')

    // our path to th emocked data is something like '/static/data/reddit/r/vuejs/imseqc/learn_vue_3_with_typescript_by_building_a_project.json
    // so...
    const subreddit = permalinkParts[2]
    const typeid = permalinkParts[3]
    const userid = permalinkParts[4]
    const postid = permalinkParts[5]
    const url = `/static/data/reddit/r/${ subreddit }/${ typeid }/${ userid }/${ postid }.json`
  
    const getParameters: HttpRequestParamsInterface = {
      url: url,
      requiresToken: false
    }
  
    return HttpClient.get<SubredditInterface[]>(getParameters)
  }
}

// export our instance
export default redditApiClient
