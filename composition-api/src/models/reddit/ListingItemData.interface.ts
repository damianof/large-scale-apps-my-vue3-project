export interface ListingItemDataInterface {
  id: string
  subreddit: string
  subreddit_name_prefixed: string
  subreddit_type: string // public
  subreddit_id: string
  hidden: boolean
  author: string
  author_fullname: string
  name: string
  title: string
  link_flair_text_color: string
  upvote_ratio: number
  ups: number
  total_awards_received: number
  is_original_content: boolean
  category: string
  score: number
  author_premium: boolean
  thumbnail: string // image url
  created: number //
  view_count: number
  over_18: boolean
  preview: {
    enabled: boolean
    images: {
      source: {
        url: string
        width: number
        height: number
      }
    }[]
  }
  permalink: string
  url: string
  created_utc: number
  is_video: boolean
}
