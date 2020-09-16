import { ThemesStateInterface, MutationType, StoreModuleNames } from '@/models/store'
import { ThemeInfoInterface } from '@/models/themes/ThemeInfo.interface'
import { config } from '@/config'
import { store } from '../'

// drive themes with config
const availableThemes: ThemeInfoInterface[] = config.themes

/**
 * @name initialThemesState
 * @description
 * The Themes state instance
 */
export const initialThemesState: ThemesStateInterface = {
  themes: availableThemes
}
