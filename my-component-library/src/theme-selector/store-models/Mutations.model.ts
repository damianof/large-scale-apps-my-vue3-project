import { ThemeInfoInterface } from '../models'
import { StateInterface } from './State.interface'

/**
 * @name MutationsInterface
 */
export interface MutationsInterface {
  loadThemes(themes: ThemeInfoInterface[]): void
  selectTheme(themeId: string): void
}

/**
 * @name MutationsModel
 */
export class MutationsModel implements MutationsInterface {
  private state!: StateInterface

  constructor(state: StateInterface) {
    this.state = state
  }

  loadThemes(themes: ThemeInfoInterface[]) {
    this.state.themes = themes
  }

  selectTheme(themeId: string) {
    this.state.themes.forEach(theme => {
      theme.selected = theme.id === themeId
    })
  }
}
