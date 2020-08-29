<template>
  <div class="locale-selector">
    <div class="locale-radio-group">
      <LocaleFlagRadio
        v-for="(localeInfo, index) in availableLocales"
        :key="index"
        :localeInfo="localeInfo"
        @clicked="onFlagClicked"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface'
  import LocaleFlagRadio from './LocaleFlagRadio.component.vue'

  const LocaleSelectorComponent = {
    components: {
      LocaleFlagRadio
    },
    props: {
      availableLocales: {
        type: Array
      }
    },
    setup(props: any, { emit }: any) {
      const i18n = useI18n()

      const onFlagClicked = (localeInfo: LocaleInfoInterface) => {
        emit('clicked', localeInfo)
      }

      return {
        onFlagClicked
      }
    }
  }

  export default defineComponent(LocaleSelectorComponent)
</script>
