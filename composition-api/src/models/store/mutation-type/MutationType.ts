// group our constants in a namespace
// GEN-IMPORTS
import { ItemsMutationType } from '../items/ItemsMutationType'
import { LocalesMutationType } from '../locales/LocalesMutationType'

export namespace MutationType {
  // GEN-NAMESPACE-CONSTS
  export const items = ItemsMutationType
  export const locales = LocalesMutationType
  // as you add more domain-specific mutation types, add them here following the same convention
}
