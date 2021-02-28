<template> </template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      id: {
        type: Number,
        default: -1,
        markRaw: true
      },
      containerId: {
        type: Number,
        default: -1
      }
    },
    computed: {
      cssClasses(): string {
        const arr: string[] = ['widget']
        return arr.join(' ').trim()
      }
    },
    emits: ['close'],
    methods: {
      onCloseClick() {
        this.$emit('close', this.id)
      }
    }
  })
</script>
