import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'

import {
  MutationType,
  RootStateInterface,
  LocalesStateInterface
} from '@/models/store'

import { initialLocalesState } from './initialState'

import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface'
import { i18n } from '@/plugins/vue-i18n-next-plugin'
import { LocalStorageKeys } from '@/models/local-storage/LocalStorageKeys'

export const mutations: MutationTree<LocalesStateInterface> = {
  selectLocale(state: LocalesStateInterface, localeId: string) {
    // set only the model selected to true
    state.availableLocales.forEach(localeInfo => {
      localeInfo.selected = localeInfo.locale === localeId
      if (localeInfo.selected) {
        // switch i18n selected locale
        i18n.global.locale.value = localeInfo.locale
        // save the user preference also to localStorage
        localStorage.setItem(LocalStorageKeys.locale, localeInfo.locale)
      }
    })
  }
}

export const actions: ActionTree<LocalesStateInterface, RootStateInterface> = {
  selectLocale({ commit }, localeId: string) {
    commit(MutationType.locales.selectLocale, localeId)
  }
}

export const getters: GetterTree<LocalesStateInterface, RootStateInterface> = {}

const namespaced: boolean = true
const state: LocalesStateInterface = initialLocalesState

export const localesState: Module<LocalesStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
