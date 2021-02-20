<template>
  <div class="about">
    <ElText tag="h1" addCss="text-gray-500" text="Primitives"/>
    <div class="p-6 border">
      <ElText tag="h2" addCss="text-red-500" text="Here ElText will render a <h2> element"/>
      <ElText tag="p" addCss="text-red-700" text="Here ElText will render a <p> element"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue'
  import ElText from '../components/primitives/text/ElText.vue'

  export default defineComponent({
    name: 'Primitives',
    components: {
      ElText
    }
  })
</script>

