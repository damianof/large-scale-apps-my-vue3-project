<template>
  <div id="app">
    <div class="long-date">{{ i18n.d(new Date(), 'long') }}</div>
    <h2>{{ i18n.t('welcome') }}</h2>
    <LocaleSelector :availableLocales="availableLocales" @clicked="onLocaleClicked" />
    <ThemeSelector :availableThemes="availableThemes" />
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
  import { MutationType } from '@/models/store'
  import { useLocalesStore } from '@/store'
  import { config } from '@/config'
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
      const i18n = useI18n()
      const localesStore = useLocalesStore()

      const availableLocales = computed(() => {
        return localesStore.state.availableLocales
      })

      const availableThemes = config.themes

      const onLocaleClicked = (localeInfo: LocaleInfoInterface) => {
        localesStore.action(
          MutationType.locales.selectLocale,
          localeInfo.locale
        )
      }

      return {
        i18n,
        availableLocales,
        onLocaleClicked,
        availableThemes
      }
    }
  })
</script>
