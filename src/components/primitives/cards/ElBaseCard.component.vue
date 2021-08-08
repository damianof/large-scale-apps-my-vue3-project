<template>
  <div class="card bg-gray-100 mb-2 border border-gray-300 shadow-md" :class="cssClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ElBaseCard',
    props: {
      cssClasses: {
        type: String
      }
    }
  })
</script>
