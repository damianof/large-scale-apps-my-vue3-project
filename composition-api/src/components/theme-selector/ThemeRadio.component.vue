<template>
  <label
    role="radio"
    :class="
      `theme-radio ${themeInfo.id} ${
        themeInfo.selected ? 'selected' : ''
      }`.trim()
    "
  >
    <i class="material-icons">{{ themeInfo.icon }}</i>
    <input
      type="radio"
      class="icon-button"
      name="theme"
      :value="themeInfo.selected"
      v-model="themeInfo.selected"
      @click="onClick"
    />
  </label>
</template>

<script lang="ts">
  import { defineComponent, reactive, computed, PropType } from 'vue'
  import { ThemeInfoInterface } from '@/models/themes/ThemeInfo.interface'

  export default defineComponent({
    props: {
      themeInfo: {
        type: Object as PropType<ThemeInfoInterface>
      }
    },
    setup(props: any, { emit }: any) {
      const onClick = () => {
        emit('clicked', props.themeInfo.id)
      }

      return {
        onClick
      }
    }
  })
</script>
