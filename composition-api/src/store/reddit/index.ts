import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'

import {
  MutationType,
  RootStateInterface,
  RedditStateInterface
} from '@/models/store'

import { initialRedditState } from './initialState'

import { SubredditInterface } from '@/models/reddit'
import apiClient from '@/api-client'

export const mutations: MutationTree<RedditStateInterface> = {
  loadingSubreddit(state: RedditStateInterface, loading: boolean) {
    state.loading = loading
  },
  loadedSubreddit(state: RedditStateInterface, subreddit: SubredditInterface) {
    state.subreddit = subreddit
    state.loading = false
  },

  loadingSubredditPost(state: RedditStateInterface, loading: boolean) {
    state.loadingPost = loading
  },
  loadedSubredditPost(state: RedditStateInterface, subredditPost: SubredditInterface) {
    state.subredditPost = subredditPost
    state.loadingPost = false
  }
}

export const actions: ActionTree<RedditStateInterface, RootStateInterface> = {
  loadSubreddit({ commit }, subredditKey: string) {
    commit(MutationType.reddit.loadingSubreddit, true)

    apiClient.reddit.fetchSubreddit(subredditKey).then((response: any) => {

      // map the data received as we prefer
      const model: SubredditInterface = {
        kind: response.kind,
        name: subredditKey,
        data: response.data
      }

      commit(MutationType.reddit.loadedSubreddit, model)
    })
  },

  loadSubredditPost({ commit }, path: string) {
    commit(MutationType.reddit.loadingSubredditPost, true)

    apiClient.reddit.fetchSubredditPost(path).then((data: any) => {
      // TODO: need to map the data received with additional UI flag properties if needed

      commit(MutationType.reddit.loadedSubredditPost, data)
    })
  }
}

export const getters: GetterTree<RedditStateInterface, RootStateInterface> = {}

// create our Reddit store instance
const namespaced: boolean = true
const state: RedditStateInterface = initialRedditState

export const redditState: Module<RedditStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
