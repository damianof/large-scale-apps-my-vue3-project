import { LocalesStateInterface } from '@/models/store'
import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface'
import { config } from '@/config'

// drive locales with config
const availableLocales: LocaleInfoInterface[] = config.locales

/**
 * @name initialLocalesState
 * @description
 * The Locales state instance
 */
export const initialLocalesState: LocalesStateInterface = {
  availableLocales: availableLocales
}
