<template>
  <div class="theme-selector">
    <div class="theme-radio-group">
      <ThemeRadio
        v-for="(theme, index) in themes"
        :key="index"
        :themeInfo="theme"
        @clicked="onThemeClicked"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, onMounted } from 'vue'
  import { ThemeInfoInterface } from '@/models/themes/ThemeInfo.interface'
  import ThemeRadio from './ThemeRadio.component.vue'

  export default defineComponent({
    components: {
      ThemeRadio
    },
    props: {
      themes: Array as PropType<ThemeInfoInterface[]>
    },
    setup(props: any, { emit }: any) {
      const onThemeClicked = (themeId: string) => {
        emit('clicked', themeId)
      }

      return {
        onThemeClicked
      }
    }
  })
</script>
