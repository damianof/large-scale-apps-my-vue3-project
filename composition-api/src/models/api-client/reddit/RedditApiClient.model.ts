import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'

import { RedditApiClientUrlsInterface } from './RedditApiClientUrls.interface'
import { RedditApiClientInterface } from './RedditApiClient.interface'
import { SubredditInterface } from '@/models/reddit'

/**
 * @Name RedditApiClientModel
 * @description
 * Implements the RedditApiClientInterface interface
 */
export class RedditApiClientModel implements RedditApiClientInterface {
  private readonly urls!: RedditApiClientUrlsInterface

  constructor(urls: RedditApiClientUrlsInterface) {
    this.urls = urls
  }

  fetchSubreddit(subreddit: string): Promise<SubredditInterface> {
    const url = this.urls.fetchSubreddit.replace('[key]', subreddit)

    const getParameters: HttpRequestParamsInterface = {
      url: url,
      requiresToken: false
    }

    return HttpClient.get<SubredditInterface>(getParameters)
  }
}
