declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare interface process {
  env: {
    VUE_APP_CONFIG: string
  }
}
