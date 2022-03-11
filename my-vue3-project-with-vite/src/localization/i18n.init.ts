import { createI18n } from 'vue-i18n'
import { getUserPreferredLocale } from './utils'

const defaultLocale = getUserPreferredLocale()

export const i18n = createI18n({
  locale: defaultLocale, // set locale
  fallbackLocale: defaultLocale, // set fallback locale
  silentFallbackWarn: true,
  silentMissingWarn: true,
  silentTranslationWarn: true
})

//console.log('i18n.mode', i18n.mode)
