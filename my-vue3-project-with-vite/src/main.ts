import { createApp } from 'vue'
import App from '@/App.vue'
import { i18n } from './localization/i18n.init'

createApp(App)
  .use(i18n)
  .mount('#app')
