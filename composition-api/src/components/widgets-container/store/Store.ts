import { 
  StateInterface, 
  ActionsInterface,
  MutationsInterface,
  StoreInterface
} from '../models'
import { Actions } from './Actions'
import { Mutations } from './Mutations'

export class Store implements StoreInterface {
  readonly state!: StateInterface
  readonly mutations!: MutationsInterface
  readonly actions!: ActionsInterface

  constructor(state: StateInterface) {
    this.state = state
    this.mutations = new Mutations(this.state)
    this.actions = new Actions(this)
  }
}
