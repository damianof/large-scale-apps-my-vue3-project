<template>
  <div id="app">
    <div class="long-date">{{ i18n.d(new Date(), 'long') }}</div>
    <h2>{{ i18n.t('welcome') }}</h2>
    <LocaleSelector :availableLocales="availableLocales" @clicked="onLocaleClicked" />
    <ThemeSelector :availableThemes="availableThemes" />
    <div id="nav" class="nav">
      <router-link to="/">{{ i18n.t('navigation.home') }}</router-link> |
      <router-link to="/about">{{ i18n.t('navigation.about') }}</router-link> |
      <router-link to="/primitives">{{ i18n.t('navigation.primitives') }}</router-link> |
      <router-link to="/widgets-playground">{{ i18n.t('navigation.widgetsPlayground') }}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { config } from '@/config'
  import { MutationType } from '@/models/store'
  import { useLocalesStore } from '@/store/locales'
  import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface'
  import LocaleSelector from '@/components/locale-selector/LocaleSelector.component.vue'
  import { ThemeSelector } from 'my-component-library'

  export default defineComponent({
    name: 'App',
    components: {
      LocaleSelector,
      ThemeSelector
    },
    setup() {
      // private:
      const localesStore = useLocalesStore()

      // helpers/shortcuts:
      const i18n = useI18n()
      const availableThemes = config.themes

      // computed:
      const availableLocales = computed(() => {
        return localesStore.state.availableLocales
      })

      // methods:
      const onLocaleClicked = (localeInfo: LocaleInfoInterface) => {
        localesStore.action(MutationType.locales.selectLocale, localeInfo.locale)
      }

      return {
        i18n,
        availableThemes,
        // computed:
        availableLocales,
        // methods:
        onLocaleClicked
      }
    }
  })
</script>
