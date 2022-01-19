import {
  createI18n,
  VueMessageType,
  LocaleMessages,
  ComposerOptions,
  DatetimeFormat, // TODO: see if vue-i18n@next alpha 13 has a type for this
  NumberFormat // TODO: see if vue-i18n@next alpha 13 has a type for this
} from 'vue-i18n'

// interface LocalesDataInterface {
//   datetimeFormats: any // TODO: see if vue-i18n@next alpha 13 has a type for this
//   numberFormats: any // TODO: see if vue-i18n@next alpha 13 has a type for this
//   messages: { [k: string]: any} | LocaleMessages<VueMessageType> 
// }

/**
 * @name: getLocalesData
 * @description: Helper to load the locale json files with each locale data
 */
const getLocalesData = (): ComposerOptions => {
  // we use require.context to get all the .json files under the locales sub-directory
  const files = (require as any).context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  // create the instance that will hold the loaded data
  const localeData: ComposerOptions = {
    datetimeFormats: {},
    numberFormats: {},
    messages: {}
  }
  // loop through all the files
  const keys: string[] = files.keys()
  keys.forEach((key: string) => {
    // extract name without extension
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const localeId = matched[1]
      // from each file, set the related messages property
      if (localeData.datetimeFormats) {
        localeData.datetimeFormats[localeId] = files(key).datetimeFormats
      }
      if (localeData.numberFormats) {
        localeData.numberFormats[localeId] = files(key).numberFormats
      }
      if (localeData.messages) {
        localeData.messages[localeId] = files(key).messages
      }
    }
  })

  return localeData
}

// create our data dynamically by loading the JSON files through our getLocalesData helper
const data: ComposerOptions = getLocalesData()

// create out vue-18n instance
export const i18n = createI18n({
  locale: 'it-IT',
  fallbackLocale: 'en-US',
  messages: data.messages,
  datetimeFormats: data.datetimeFormats,
  numberFormats: data.numberFormats
} as ComposerOptions)
