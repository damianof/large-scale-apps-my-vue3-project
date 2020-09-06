<template>
  <li :class="css" @click="onClick">
    <div class="selected-indicator">⋆</div>
    <div class="name">{{ model.data.author }}: {{ model.data.title }} {{ model.data.permalink }}</div>
  </li>
</template>

<script lang="ts">
  import { defineComponent, computed, ComponentOptionsWithObjectProps, PropType } from 'vue'
  import { ChildItemInterface } from '@/models/reddit'

  export default defineComponent({
    props: {
      model: {
        type: Object as PropType<ChildItemInterface>
      }
    },
    setup(props, { emit }) {
      const css = computed(() => {
        let css = 'item'
        return css.trim()
      })

      const onClick = () => {
        // emit permalink to parent component
        emit('permalinkClicked', props.model?.data.permalink)
      }

      return {
        css,
        onClick
      }
    }
  })
</script>
