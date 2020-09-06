// group our constants in a namespace
export namespace RedditMutationType {
  export const loadSubreddit: string = 'loadSubreddit'
  export const loadingSubreddit: string = 'loadingSubreddit'
  export const loadedSubreddit: string = 'loadedSubreddit'
  
  export const loadSubredditPost: string = 'loadSubredditPost'
  export const loadingSubredditPost: string = 'loadingSubredditPost'
  export const loadedSubredditPost: string = 'loadedSubredditPost'
  // as you add new mutations to the Items store module, keep adding their names here as above
}
