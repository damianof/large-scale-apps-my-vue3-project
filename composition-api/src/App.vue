<template>
  <div id="app">
    <div class="long-date">{{ i18n.d(new Date(), 'long') }}</div>
    <h2>{{ i18n.t('welcome') }}</h2>
    <ThemeSelector />
    <LocaleSelector
      :availableLocales="availableLocales"
      @clicked="onLocaleClicked"
    />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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

      const onLocaleClicked = (localeInfo: LocaleInfoInterface) => {
        store.dispatch(
          `${StoreModuleNames.localesState}/${MutationType.locales.selectLocale}`,
          localeInfo
        )
      }

      return {
        i18n,
        availableLocales,
        onLocaleClicked
      }
    }
  })
</script>
