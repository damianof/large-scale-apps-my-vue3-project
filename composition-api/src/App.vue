<template>
  <div id="app">
    <div class="long-date">{{ i18n.d(new Date(), 'long') }}</div>
    <h2>{{ i18n.t('welcome') }}</h2>
    <LocaleSelector
      :availableLocales="availableLocales"
      @clicked="onLocaleClicked"
    />
    <ThemeSelector :themes="themes" @clicked="onThemeClicked" />
    <div id="nav" class="nav">
      <router-link to="/">{{ i18n.t('navigation.home') }}</router-link> |
      <router-link to="/about">{{ i18n.t('navigation.about') }}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { MutationType, StoreModuleNames } from '@/models/store'
  import { store } from '@/store'
  import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface'
  import LocaleSelector from '@/components/locale-selector/LocaleSelector.component.vue'
  import ThemeSelector from '@/components/theme-selector/ThemeSelector.component.vue'

  export default defineComponent({
    name: 'App',
    components: {
      LocaleSelector,
      ThemeSelector
    },
    setup() {
      const i18n = useI18n()

      const availableLocales = computed(() => {
        return store.state.localesState.availableLocales
      })
      const themes = computed(() => {
        return store.state.themesState.themes
      })

      const onLocaleClicked = (localeInfo: LocaleInfoInterface) => {
        store.dispatch(
          `${StoreModuleNames.localesState}/${MutationType.locales.selectLocale}`,
          localeInfo.locale
        )
      }

      const onThemeClicked = (themeId: string) => {
        store.dispatch(`${StoreModuleNames.themesState}/${MutationType.themes.selectTheme}`, themeId)
      }

      return {
        i18n,
        availableLocales,
        themes,
        onLocaleClicked,
        onThemeClicked
      }
    }
  })
</script>
