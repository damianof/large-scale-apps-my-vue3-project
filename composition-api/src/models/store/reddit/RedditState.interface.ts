import { SubredditInterface } from '@/models/reddit'

/**
 * @name RedditStateInterface
 * @description
 * Interface for the Reddit state
 */
export interface RedditStateInterface {
  loading: boolean
  subreddit: SubredditInterface
}
