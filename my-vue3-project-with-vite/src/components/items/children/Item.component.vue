<template>
  <li :class="cssClass" @click="onClick">
    [{{model.name}}] [{{model.selected}}]
  </li>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from 'vue'

  //import ElText from '@/components/primitives/text/ElText.vue'
  //import ElToggle from '@/components/primitives/toggles/ElToggle.vue'
  /*
    <ElText tag="div" :text="model.name" addCss="name"/>
    <ElToggle :checked="model.selected" addCss="ml-2"/>
  */

  import { ItemInterface } from '../../../models'

  export default defineComponent({
    name: 'ItemComponent',
    components: {
      // ElText,
      // ElToggle
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

      const cssClass = computed(() => {
        let result = ['item flex items-center justify-between cursor-pointer border border-l-4 list-none rounded-sm px-3 py-3']
        if (props.model?.selected) {
          result.push('font-bold bg-pink-200 hover:bg-pink-100 selected')
        } else {
          result.push('text-gray-500 hover:bg-gray-100')
        }
        if (!props.isLast) {
          result.push('border-b-0')
        }
        return result.join(' ').trim()
      })

      const onClick = () => {
        emit('select', props.model)
      }

      return {
        cssClass,
        onClick
      }
    }
  })
</script>
