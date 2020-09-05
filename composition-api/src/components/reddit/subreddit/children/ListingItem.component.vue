<template>
  <li :class="css" @click="onClick">
    <div class="selected-indicator">⋆</div>
    <div class="name">{{ model.author }}: {{ model.title }}</div>
  </li>
</template>

<script lang="ts">
  import { defineComponent, computed, ComponentOptionsWithObjectProps, PropType } from 'vue'
  import { ListingItemInterface } from '@/models/reddit'

  export default defineComponent({
    props: {
      model: {
        type: Object as PropType<ListingItemInterface>
      }
    },
    setup(props, { emit }) {
      const css = computed(() => {
        let css = 'item'
        return css.trim()
      })

      const onClick = () => {
        emit('select', props.model)
      }

      return {
        css,
        onClick
      }
    }
  })
</script>
