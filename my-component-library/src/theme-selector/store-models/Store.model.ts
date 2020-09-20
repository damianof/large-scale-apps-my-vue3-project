import { MutationsInterface, MutationsModel } from './Mutations.model'
import { ActionsInterface, ActionsModel } from './Actions.model'
import { StateInterface } from './State.interface'

/**
 * @name Store interface
 */
export interface StoreInterface {
  state: StateInterface
  mutations: MutationsInterface
  actions: ActionsInterface
}

/**
 * @name Store model
 */
export class StoreModel implements StoreInterface {
  readonly state!: StateInterface
  readonly mutations!: MutationsInterface
  readonly actions!: ActionsInterface

  constructor(state: StateInterface) {
    this.state = state
    this.mutations = new MutationsModel(this.state)
    this.actions = new ActionsModel(this)
  }
}
