// group our constants in a namespace
import { ItemsMutationType } from '../items/ItemsMutationType'
import { LocalesMutationType } from '../locales/LocalesMutationType'
import { RedditMutationType } from '../reddit/RedditMutationType'

export namespace MutationType {
  export const items = ItemsMutationType
  export const locales = LocalesMutationType
  export const reddit = RedditMutationType
  // as you add more domain-specific mutation types, add them here following the same convention
}
