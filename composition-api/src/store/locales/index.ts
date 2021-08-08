import { rootStore, dispatchModuleAction } from '../root'
import { MutationType, StoreModuleNames, LocalesStateInterface } from '@/models/store'
import { LocalStorageKeys } from '@/models/local-storage/LocalStorageKeys'

/**
 * @name localesStore
 * @description
 * The locales store wrapper that returns the localesState and exposes a generic action<T> method
 */
const localesStore = {
  get state(): LocalesStateInterface {
    return rootStore.state.localesState
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.localesState, actionName, params)
  }
}

// export our wrappers using the composition API convention (i.e. useXYZ)
export const useLocalesStore = () => {
  return localesStore
}

// for the current locale,
// try using the last user's preferred locale
// if available from localStorage
const userPreferredLocaleId: string = localStorage.getItem(LocalStorageKeys.locale) || ''
if (userPreferredLocaleId.length > 0) {
  // change locale selected
  localesStore.action(MutationType.locales.selectLocale, userPreferredLocaleId)
}
