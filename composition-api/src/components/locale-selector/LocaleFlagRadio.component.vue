<template>
  <label
    role="radio"
    :class="`locale-radio ${localeInfo.selected ? 'selected' : ''}`.trim()"
  >
    <i :class="`flag-icons ${localeInfo.flag}`"></i>
    <input
      type="radio"
      class="icon-button"
      name="locale"
      :value="localeInfo.selected"
      v-model="localeInfo.selected"
      @click="onClick"
    />
  </label>
</template>

<script lang="ts">
  import { defineComponent, reactive, computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface'
  import { i18n } from '@/plugins/vue-i18n-next-plugin'

  export default defineComponent({
    props: {
      localeInfo: {
        type: Object
      }
    },
    setup(props, { emit }) {
      const i18n = useI18n()

      const onClick = () => {
        emit('clicked', props.localeInfo)
      }

      return {
        onClick
      }
    }
  })
</script>
