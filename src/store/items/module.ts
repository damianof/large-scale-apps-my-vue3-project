import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'

import { MutationType, RootStateInterface, ItemsStateInterface } from '@/models/store'

import { initialItemsState } from './initialState'

import { ItemInterface } from '@/models/items/Item.interface'
import apiClient from '@/api-client'

/**
 * @name mutations
 * @description
 * Vuex Items mutations
 */
export const mutations: MutationTree<ItemsStateInterface> = {
  loadingItems(state: ItemsStateInterface) {
    state.loading = true
  },
  loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
    state.items = items
    state.loading = false
  },
  selectItem(
    state: ItemsStateInterface,
    params: {
      id: number
      selected: boolean
    }
  ) {
    const { id, selected } = params
    const item = state.items.find(o => o.id === id)
    if (item) {
      item.selected = selected
    }
  }
}

/**
 * @name actions
 * @description
 * Vuex Items actions
 */
export const actions: ActionTree<ItemsStateInterface, RootStateInterface> = {
  loadItems({ commit }) {
    commit(MutationType.items.loadingItems)

    // let's pretend we called some API end-point
    // and it takes 1 second to return the data
    // by using javascript setTimeout with 1000 for the milliseconds option
    setTimeout(() => {
      apiClient.items.fetchItems().then((data: ItemInterface[]) => {
        commit(MutationType.items.loadedItems, data)
      })
    }, 1000)
  },
  selectItem(
    { commit },
    params: {
      id: number
      selected: boolean
    }
  ) {
    commit(MutationType.items.selectItem, params)
  }
}

/**
 * @name getters
 * @description
 * Vuex Items getters
 */
export const getters: GetterTree<ItemsStateInterface, RootStateInterface> = {}

// create our Items store instance
const namespaced: boolean = true
const state: ItemsStateInterface = initialItemsState

/**
 * @name itemsState
 * @description
 * Vuex Items store
 */
export const itemsState: Module<ItemsStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
