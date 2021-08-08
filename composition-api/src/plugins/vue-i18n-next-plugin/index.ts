import {
  createI18n,
  VueMessageType,
  LocaleMessages,
  //DateTimeFormat, // TODO: see if vue-i18n@next alpha 13 has a type for this
  //NumberFormats // TODO: see if vue-i18n@next alpha 13 has a type for this
} from 'vue-i18n'

interface LocalesDataInterface {
  datetimeFormats: any // TODO: see if vue-i18n@next alpha 13 has a type for this
  numberFormats: any // TODO: see if vue-i18n@next alpha 13 has a type for this
  messages: LocaleMessages<VueMessageType> 
}

/**
 * @name: getLocalesData
 * @description: Helper to load the locale json files with each locale data
 */
const getLocalesData = (): LocalesDataInterface => {
  // we use require.context to get all the .json files under the locales sub-directory
  const files = (require as any).context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  // create the instance that will hold the loaded data
  const localeData: LocalesDataInterface = {
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
      localeData.datetimeFormats[localeId] = files(key).datetimeFormats
      localeData.numberFormats[localeId] = files(key).numberFormats
      localeData.messages[localeId] = files(key).messages
    }
  })

  return localeData
}

// create our data dynamically by loading the JSON files through our getLocalesData helper
const data: LocalesDataInterface = getLocalesData()

// create out vue-18n instance
export const i18n = createI18n({
  locale: 'it-IT',
  fallbackLocale: 'en-US',
  messages: data.messages,
  datetimeFormats: data.datetimeFormats,
  numberFormats: data.numberFormats
})
