import { reactive } from 'vue'
import { ThemeInfoInterface } from './models'
import { StateInterface, StoreInterface, StoreModel } from './store-models'

// drive themes with config
const availableThemes: ThemeInfoInterface[] = []

/**
 * @name themesState (reactive)
 * @description
 * The Themes state instance
 */
export const themesState: StateInterface = reactive({
  themes: availableThemes
})

// store
export const Store: StoreInterface = new StoreModel(themesState)
