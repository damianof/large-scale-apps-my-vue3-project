import { MutationsInterface } from './Mutations.model';
import { ActionsInterface } from './Actions.model';
import { StateInterface } from './State.interface';
/**
 * @name Store interface
 */
export interface StoreInterface {
    state: StateInterface;
    mutations: MutationsInterface;
    actions: ActionsInterface;
}
/**
 * @name Store model
 */
export declare class StoreModel implements StoreInterface {
    readonly state: StateInterface;
    readonly mutations: MutationsInterface;
    readonly actions: ActionsInterface;
    constructor(state: StateInterface);
}
