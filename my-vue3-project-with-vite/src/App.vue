<template>
  <div>
    <h3>{{ t('home.welcome') }} [{{ currentLocale }}]</h3>
    <LocaleSelector />
    <ItemsView />
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, onMounted } from 'vue'
  import ItemsView from '@/views/Items.view.vue'
  import LocaleSelector from '@/components/shared/LocaleSelector.component.vue'
  // import a reference to useLocalization
  import { useLocalization } from '@/localization/useLocalization'

  export default defineComponent({
    name: 'App',
    components: {
      LocaleSelector,
      ItemsView
    },
    setup() {
      // get what we need from useLocalization:
      const { t, currentLocale, changeLocale } = useLocalization()

      onMounted(() => {
        changeLocale(currentLocale.value)
      })

      return {
        t, currentLocale
      }
    }
  })
</script>
