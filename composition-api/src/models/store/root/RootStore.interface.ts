import {
  // GEN-IMPORTS
  ItemsStateInterface,
  LocalesStateInterface,
  RedditStateInterface
} from '../'

/**
 * @name RootStoreInterface
 * @description
 * Wraps together each store module interface in one place
 */
export interface RootStoreInterface {
  // GEN-INTERFACE-PROPS
  itemsState: ItemsStateInterface
  localesState: LocalesStateInterface
  redditState: RedditStateInterface
  // additional domain-specific module interfaces we’ll be added here in the next book chapters
}
