<template>
  <div class="card bg-gray-100 mb-2 px-4 py-5 border-b border-gray-300 sm:px-6 shadow-md" :class="cssClasses">
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
