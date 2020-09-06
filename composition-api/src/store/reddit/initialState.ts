import { RedditStateInterface } from '@/models/store'

/**
 * @name initialRedditState
 * @description
 * The Reddit state instance with the initial default values
 */
export const initialRedditState: RedditStateInterface = {
  loading: false,
  loadingPost: false,
  subreddit: {
    kind: 'Listing',
    name: 'r/unknown',
    data: {
      dist: 0,
      children: []
    }
  },
  subredditPost: {
    kind: 'Listing',
    name: 'Blah',
    data: {
      dist: 0,
      children: []
    }
  }
}
