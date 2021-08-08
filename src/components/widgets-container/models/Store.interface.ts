import { StateInterface } from  '../models/State.interface'
import { ActionsInterface } from  '../models/Actions.interface'
import { MutationsInterface } from '../models/Mutations.interface'

export interface StoreInterface {
  state: StateInterface
  mutations: MutationsInterface
  actions: ActionsInterface
}
