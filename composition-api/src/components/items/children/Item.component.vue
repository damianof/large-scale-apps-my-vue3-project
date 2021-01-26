<template>
  <li :class="css" @click="onClick">
    <div class="selected-indicator">⋆</div>
    <div class="name">{{ model.name }}</div>
  </li>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from 'vue'
  import { ItemInterface } from '@/models/items/Item.interface'

  export default defineComponent({
    props: {
      model: {
        type: Object as PropType<ItemInterface>
      }
    },
    emits: ['select'],
    setup(props, { emit }) {
      const css = computed(() => {
        let css = 'item'
        if (props.model?.selected) {
          css += ' selected'
        }
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
