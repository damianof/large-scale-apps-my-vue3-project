import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'

import {
  MutationType,
  RootStateInterface,
  LocalesStateInterface
} from '@/models/store'

import { initialLocalesState } from './initialState'

import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface'
import { i18n } from '@/plugins/vue-i18n-next-plugin'

export const mutations: MutationTree<LocalesStateInterface> = {
  selectLocale(state: LocalesStateInterface, model: LocaleInfoInterface) {
    // set only the model selected to true
    state.availableLocales.forEach(localeInfo => {
      localeInfo.selected = localeInfo.locale === model.locale
      if (localeInfo.selected) {
        // switch i18n selected locale
        i18n.global.locale.value = localeInfo.locale
      }
    })
  }
}

export const actions: ActionTree<LocalesStateInterface, RootStateInterface> = {
  selectLocale({ commit }, localeInfo: LocaleInfoInterface) {
    commit(MutationType.locales.selectLocale, localeInfo)
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
