<template>
  <li :class="css" @click="onClick">
    <div class="selected-indicator">⋆</div>
    <div class="name">{{ model.name }}</div>
  </li>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from 'vue'
  import { ItemInterface } from '@/models/items/Item.interface'

  const ItemComponent = {
    props: {
      model: {
        type: Object as PropType<ItemInterface>
      }
    },
    setup(props: any, { emit }: any) {
      const css = computed(() => {
        let css = 'item'
        if (props.model.selected) {
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
  }
  export default defineComponent(ItemComponent)
</script>
