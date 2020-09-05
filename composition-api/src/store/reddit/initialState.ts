import { RedditStateInterface } from '@/models/store'

/**
 * @name initialRedditState
 * @description
 * The Reddit state instance with the initial default values
 */
export const initialRedditState: RedditStateInterface = {
  loading: false,
  subreddit: {
    kind: 'Listing',
    data: {
      dist: 0,
      children: []
    }
  }
}
