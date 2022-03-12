<template>
  <div class="locale-selector">
    <div v-if="isLoadingLocale">Loading locale data...</div>
    <label
      v-for="item in locales"
      :key="item.key"
      :for="`radio-locale-${item.key}`"
      class="cursor-pointer"
      @click.prevent="onLocaleClick(item.key)"
    >
      <input
        type="radio"
        :id="`radio-locale-${item.key}`"
        :radioGroup="currentLocale"
        name="locale"
        :value="item.key"
        :checked="currentLocale === item.key"
      />
      {{ t(`locale.selector.${item.key}`) }}
    </label>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useLocalization } from '@/localization/useLocalization'

  export default defineComponent({
    name: 'LocaleSelector',
    setup() {
      const { t, locales, currentLocale, isLoadingLocale, changeLocale } = useLocalization()

      // an event handler from cahnging the locale
      const onLocaleClick = (lcid: string) => {
        changeLocale(lcid)
      }

      return {
        t,
        locales,
        currentLocale,
        isLoadingLocale,
        onLocaleClick
      }
    }
  })
</script>
