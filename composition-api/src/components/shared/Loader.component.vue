<template>
  <div class="loader" v-show="show">
    <div class="bounceball"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  const LoaderComponent = {
    props: {
      show: {
        type: Boolean
      }
    }
  }

  export default defineComponent(LoaderComponent)
</script>
