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
  loadingSubreddit(state: RedditStateInterface) {
    state.loading = true
  },
  loadedSubreddit(state: RedditStateInterface, subreddit: SubredditInterface) {
    state.subreddit = subreddit
    state.loading = false
  }
}

export const actions: ActionTree<RedditStateInterface, RootStateInterface> = {
  loadSubreddit({ commit }, subredditKey: string) {
    console.log('subredditKey', subredditKey)
    commit(MutationType.reddit.loadingSubreddit)

    apiClient.reddit.fetchSubreddit(subredditKey).then((data: any) => {
      // TODO: need to map the data received with additional UI flag properties if needed

      commit(MutationType.reddit.loadedSubreddit, data)
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
