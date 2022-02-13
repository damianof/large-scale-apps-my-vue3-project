<template>
  <div class="loader" v-show="show">
    <div class="bounceball"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      show: {
        type: Boolean
      }
    }
  })
</script>
