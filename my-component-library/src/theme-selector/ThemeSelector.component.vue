<template>
  <div class="theme-selector">
    <div class="theme-radio-group">
      <ThemeRadio v-for="(theme, index) in themes" :key="index" :themeInfo="theme" @clicked="changeTheme" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed, onMounted } from 'vue'
  import { ThemeInfoInterface } from './models/ThemeInfo.interface'
  import { Store } from './ThemesStore'
  import { LocalStorageKeys } from './store-models'
  import ThemeRadio from './ThemeRadio.component.vue'

  export default defineComponent({
    components: {
      ThemeRadio
    },
    props: {
      availableThemes: {
        type: Array as PropType<ThemeInfoInterface[]>,
        default: []
      }
    },
    computed: {
      themes: () => {
        return Store.state.themes
      }
    },
    setup(props, { emit }) {
      // handles theme radio click:
      const changeTheme = (themeId: string) => {
        emit('themeClicked', themeId)
        Store.actions.selectTheme(themeId)
        emit('themeChanged', themeId)
      }

      // on mounted, initialize the themes
      // and make sure we select a theme
      // (from user preference saved in localStorage or default to first theme)
      onMounted(() => {
        Store.actions.loadThemes(props.availableThemes)

        // for the current theme,
        // try using the last user's preferred theme
        // if available from localStorage
        const userPreferredThemeId: string = localStorage.getItem(LocalStorageKeys.theme) || ''
        if (userPreferredThemeId.length > 0) {
          // select from user preference saved in localStorage
          changeTheme(userPreferredThemeId)
        } else {
          if (props.availableThemes.length > 0) {
            const selected = props.availableThemes.find(item => item.selected)
            if (selected) {
              changeTheme(selected.id)
            } else {
              // select the first one
              changeTheme(props.availableThemes[0].id)
            }
          }
        }
      })

      return {
        changeTheme
      }
    }
  })
</script>
