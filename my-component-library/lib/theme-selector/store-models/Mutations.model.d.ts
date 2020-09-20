import { ThemeInfoInterface } from '../models';
import { StateInterface } from './State.interface';
/**
 * @name MutationsInterface
 */
export interface MutationsInterface {
    loadThemes(themes: ThemeInfoInterface[]): void;
    selectTheme(themeId: string): void;
}
/**
 * @name MutationsModel
 */
export declare class MutationsModel implements MutationsInterface {
    private state;
    constructor(state: StateInterface);
    loadThemes(themes: ThemeInfoInterface[]): void;
    selectTheme(themeId: string): void;
}
