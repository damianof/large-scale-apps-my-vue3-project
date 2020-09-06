import { SubredditInterface } from '@/models/reddit'

/**
 * @Name RedditApiClientInterface
 * @description
 * Interface for the Reddit api client module
 */
export interface RedditApiClientInterface {
  fetchSubreddit: (subreddit: string) => Promise<SubredditInterface>
  fetchSubredditPost: (permalink: string) => Promise<SubredditInterface[]>
}
