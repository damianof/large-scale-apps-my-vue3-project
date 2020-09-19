import { createStore, StoreOptions } from 'vuex'

import {
  RootStateInterface,
  RootStoreInterface,
  RootStoreModel,
  StoreModuleNames,
  MutationType
} from '@/models/store'

import { initialRootState } from './initialState'

import { LocalStorageKeys } from '@/models/local-storage/LocalStorageKeys'

// GEN-IMPORTS
// import each Vuex module
import { itemsState } from '@/store/items'
import { localesState } from '@/store/locales'

// Vuex store options to build our modularized namespaced store
const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,

  modules: {
    // GEN-MODULES
    itemsState,
    localesState
    // as you create additional modules, you'll add them here similar to the itemsState
  }
}

// Vuex Root store instance
export const store: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions)

// for the current locale,
// try using the last user's preferred locale
// if available from localStorage
const userPreferredLocaleId: string = localStorage.getItem(LocalStorageKeys.locale) || ''
if (userPreferredLocaleId.length > 0) {
  // change locale selected
  store.dispatch(
    `${StoreModuleNames.localesState}/${MutationType.locales.selectLocale}`,
    userPreferredLocaleId
  )
}
