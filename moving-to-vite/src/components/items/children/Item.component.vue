<template>
  <li :class="css" @click="onClick">
    <ElText tag="div" :text="model.name" addCss="name"/>
    <ElToggle :checked="model.selected" addCss="ml-2"/>
  </li>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from 'vue'
  import { ItemInterface } from '../../../models/items/Item.interface'
  import ElText from '../../../primitives/text/ElText.vue'
  import ElToggle from '../../../primitives/toggles/ElToggle.vue'

  export default defineComponent({
    name: 'ItemComponent',
    components: {
      ElText,
      ElToggle
    },
    props: {
      model: {
        type: Object as PropType<ItemInterface>,
        default: () => {
          return {}
        }
      },
      isLast: {
        type: Boolean,
        default: true
      }
    },
    emits: ['select'],
    setup(props, { emit }) {
      const css = computed(() => {
        let css = 'item flex items-center justify-between cursor-pointer border border-l-4 list-none rounded-sm px-3 py-3'
        if (props.model?.selected) {
          css += ' font-bold bg-pink-200 hover:bg-pink-100 selected'
        } else {
          css += ' text-gray-500 hover:bg-gray-100'
        }
        if (!props.isLast) {
          css += ' border-b-0'
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
