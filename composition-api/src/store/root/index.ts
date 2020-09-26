import { createStore, StoreOptions } from 'vuex'

import {
  RootStateInterface,
  RootStoreInterface,
  RootStoreModel,
  StoreModuleNames,
  MutationType, 
  // GEN-IMPORTS-STATE-INTERFACE
  ItemsStateInterface,
  LocalesStateInterface
} from '@/models/store'


import { initialRootState } from './initialState'

import { LocalStorageKeys } from '@/models/local-storage/LocalStorageKeys'

// import each Vuex module
// GEN-IMPORTS-STATE
import { itemsState } from '@/store/items'
import { localesState } from '@/store/locales'

/**
 * @name storeOptions
 * @description
 * Vuex store options to build our modularized namespaced store
 */
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

/**
 * @name dispatchModuleAction
 * @description
 * Private helper to dispatch an action to a Vuex module from one place
 * So we keep the string interpolation for `${moduleName}/${actionName}` in one place only
 * and be able to dispatch action with less code in a strongly-type way
 * @param moduleName 
 * @param actionName 
 * @param params 
 */
function dispatchModuleAction<T>(moduleName: string, actionName: string, params?: T): void {
  store.dispatch(`${moduleName}/${actionName}`, params)
}

// create individual module-store wrappers by app domain
// where each wrapper returns the corresponding module state from the Vuex Store
// and has an action<T> that allows us to dispatch the action with less
// code and in  astrongly-typed way
/**
 * @name itemsStore
 * @description
 * The items store wrapper that returns the itemsState and exposes a generic action<T> method
 */
const itemsStore = {
  get state(): ItemsStateInterface {
    return store.state.itemsState
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.itemsState, actionName, params)
  }
}

/**
 * @name localesStore
 * @description
 * The locales store wrapper that retuns the localesState and exposes a generic action<T> method
 */
const localesStore = {
  get state(): LocalesStateInterface {
    return store.state.localesState
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.localesState, actionName, params)
  }
}

// export our wrappers using the composition API convention (i.e. useXYZ)
export const useItemsStore = () => {
  return itemsStore
}
export const useLocalesStore = () => {
  return localesStore
}

// for the current locale,
// try using the last user's preferred locale
// if available from localStorage
const userPreferredLocaleId: string = localStorage.getItem(LocalStorageKeys.locale) || ''
if (userPreferredLocaleId.length > 0) {
  // change locale selected
  localesStore.action(
    MutationType.locales.selectLocale,
    userPreferredLocaleId
  )
}
