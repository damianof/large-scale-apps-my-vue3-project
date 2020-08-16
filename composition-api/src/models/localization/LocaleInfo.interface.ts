export interface LocaleInfoInterface {
  name: string // the friendly name of the locale, i.e. USA
  locale: string // the locale code, i.e. en-US
  flag: string // the 2 char code used to build the icon name
  selected: boolean // if this locale is currently
}
