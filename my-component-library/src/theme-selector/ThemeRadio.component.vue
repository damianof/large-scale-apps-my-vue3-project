<template>
  <label role="radio" :class="cssClass">
    <i class="material-icons">{{ themeInfo.icon }}</i>
    <input
      type="radio"
      class="icon-button"
      name="theme"
      :value="themeInfo.selected"
      @click="onClick"
    />
  </label>
</template>

<script lang="ts">
  import { defineComponent, reactive, computed, PropType } from 'vue'
  import { ThemeInfoInterface } from './models/ThemeInfo.interface'

  export default defineComponent({
    props: {
      themeInfo: {
        type: Object as PropType<ThemeInfoInterface>
      }
    },
    computed: {
      cssClass(): string {
        const themeInfo = this.$props.themeInfo
        if (themeInfo) {
          return `theme-radio ${themeInfo.id} ${themeInfo.selected ? 'selected' : ''}`.trim()
        }
        return 'theme-radio'
      }
    },
    emits: ['clicked'],
    setup(props, { emit }) {
      const onClick = () => {
        const themeInfo = props.themeInfo
        if (themeInfo) {
          emit('clicked', themeInfo.id)
        }
      }

      return {
        onClick
      }
    }
  })
</script>
