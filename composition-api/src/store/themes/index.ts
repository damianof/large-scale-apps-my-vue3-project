import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'

import {
  MutationType,
  StoreModuleNames,
  RootStateInterface,
  ThemesStateInterface
} from '@/models/store'

import { LocalStorageKeys } from '@/models/local-storage/LocalStorageKeys'

import { initialThemesState } from './initialState'

export const mutations: MutationTree<ThemesStateInterface> = {
  selectTheme(state: ThemesStateInterface, themeId: string) {
    state.themes.forEach(theme => {
      theme.selected = theme.id === themeId
    })
  }
}

export const actions: ActionTree<ThemesStateInterface, RootStateInterface> = {
  selectTheme({ commit }: any, themeId: string) {
    if (document.body.className.indexOf('-theme') > 0) {
      document.body.className = document.body.className.replace(
        /[\w^-]+-theme+/gi,
        themeId
      )
    } else {
      document.body.classList.add(themeId)
    }
    localStorage.setItem(LocalStorageKeys.theme, themeId)
    commit(MutationType.themes.selectTheme, themeId)
  }
}

export const getters: GetterTree<ThemesStateInterface, RootStateInterface> = {}

const namespaced: boolean = true
const state: ThemesStateInterface = initialThemesState

export const themesState: Module<ThemesStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

