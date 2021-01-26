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

  export default defineComponent({
    components: {
      LocaleFlagRadio
    },
    props: {
      availableLocales: {
        type: Array
      }
    },
    emits: ['clicked'],
    setup(props, { emit }) {
      const i18n = useI18n()

      const onFlagClicked = (localeInfo: LocaleInfoInterface) => {
        emit('clicked', localeInfo)
      }

      return {
        onFlagClicked
      }
    }
  })
</script>
