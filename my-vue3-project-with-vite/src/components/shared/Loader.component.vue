<template>
  <div class="loader" v-show="show">
    Loading...
    <div class="bounceball"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ElLoader',
    props: {
      show: {
        type: Boolean
      }
    }
  })
</script>
