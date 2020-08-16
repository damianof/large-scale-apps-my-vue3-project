import { createI18n, LocaleMessages } from 'vue-i18n'

interface LocalesDataInterface {
  //datetimeFormats: any // TODO: see if vue-i18n has a type for this
  //numberFormats: any // TODO: see if vue-i18n has a type for this
  messages: LocaleMessages
}

const data: LocalesDataInterface = {
  messages: {
    'en-US': {
      welcome: 'Welcome: this message is localized for English'
    },
    'it-IT': {
      welcome: 'Benvenuti: this message is localized for Italian'
    },
    'fr-FR': {
      welcome: 'Bienvenue: this message is localized for French'
    },
    'es-ES': {
      welcome: 'Bienvenido: this message is localized for Spanish'
    }
  }
}

export const i18n = createI18n({
  locale: 'fr-FR',
  fallbackLocale: 'en-US',
  messages: data.messages
}) as any
