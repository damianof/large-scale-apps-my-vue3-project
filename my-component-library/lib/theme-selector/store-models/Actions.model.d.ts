import { ThemeInfoInterface } from '../models';
import { StoreInterface } from './Store.model';
/**
 * @name ActionsInterface
 */
export interface ActionsInterface {
    loadThemes(themes: ThemeInfoInterface[]): void;
    selectTheme(themeId: string): void;
}
/**
 * @name ActionsModel
 */
export declare class ActionsModel implements ActionsInterface {
    private readonly store;
    constructor(store: StoreInterface);
    loadThemes(themes: ThemeInfoInterface[]): void;
    selectTheme(themeId: string): void;
}
