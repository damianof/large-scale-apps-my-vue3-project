import { config } from '@/config'
import { apiClient } from '../api-client'
import { reactive, ref, nextTick } from 'vue'

import { i18n } from './i18n.init'
import { 
  getUserPreferredLocale,
  setUserPreferredLocale
} from './utils'

// get reference to out localization config
const localStorageConfig = config.localization.localStorageCache

const defaultLocaleId = getUserPreferredLocale()

// state
// const localeState = {
//   isLoadingLocale: ref(false), // will set to true whilte a locale is being loaded
//   currentLocale: ref(defaultLocaleId) // will be set to the current lcid value
// }

// state
const isLoadingLocale = ref(true) // will set to true whilte a locale is being loaded
const currentLocale = ref(defaultLocaleId) // will be set to the current lcid value


// helper to change the current 18n locale
const changeLocale = async (lcid: string) => {
  // set our loading flag to true:
  isLoadingLocale.value = true

  // try to get it from locale storage
  // dynamic key we use to cache the actual locale JSON data in the browser local storage
  const localeStorageKey = `lcid-data-${lcid}`

  const cacheEntryModel = {
    appVersion: -1,
    expiresAt: 0,
    json: ''
  }

  // retrieve JSON as string
  const cacheEntryStr = localStorage.getItem(localeStorageKey) || JSON.stringify(cacheEntryModel)
  // a variable to hold the parsed JSON data:
  let cacheEntry = cacheEntryModel

  // if localeStorage is enabled through config, then proced trying parsing the  cacheEntryStr
  if (localStorageConfig.enabled) {
    try {
      cacheEntry = JSON.parse(cacheEntryStr)
    } catch (e) {
      console.warn('error parsing data', cacheEntryStr)
    }
  }

  //console.log('cacheEntry?.expiresAt - Date.now()', cacheEntry?.expiresAt - Date.now())
  //console.log('typeof cacheEntry.json', typeof cacheEntry.json)

  // check if we have cacheEntry and if matches app version and also did not expire
  if (cacheEntry && cacheEntry.appVersion === config.global.version && cacheEntry.expiresAt - Date.now() > 0) {
    // then switch locale by invoking i18n setLocaleMessage
    i18n.global.setLocaleMessage(lcid, <any>cacheEntry.json)
    // then switch locale using i18n
    i18n.global.locale = lcid
    // update tate
    currentLocale.value = lcid
  } else {
    console.log(`loading from api: lcid: "${ lcid }"`)
    // retrieve data from API end point (or CDN etc)
    const localeData = await apiClient.localization.fetchTranslation('translation', lcid)
    // use the data returned y the API and pass it toi18n setLocaleMessage
    i18n.global.setLocaleMessage(lcid, localeData)
    // then switch locale using i18n
    i18n.global.locale = lcid
    // update tate
    currentLocale.value = lcid

    // update our cache
    const dt = new Date()
    // calculate new expiration date
    const expiresAt = dt.setMinutes(dt.getMinutes() + Number(localStorageConfig.expirationInMinutes))
    if (localStorageConfig.enabled) {
      localStorage.setItem(
        localeStorageKey,
        JSON.stringify({
          appVersion: config.global.version,
          expiresAt: expiresAt,
          json: localeData
        })
      )
    }
  }

  // also save the user preference
  setUserPreferredLocale(lcid)

  // set our loading flag to false
  isLoadingLocale.value = false

  nextTick()
}

// export all we need as a hook
export function useLocalization() {
  const availableLocales = config.localization.locales

  return {
    locales: availableLocales,
    isLoadingLocale,
    currentLocale,
    changeLocale,
    t: i18n.global.t,
    //getUserPreferredLocale
  }
}
