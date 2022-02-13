<template>
  <component :is="tag" :class="cssClass">{{ text }}</component>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ElText',
    props: {
      tag: {
        type: String,
        default: 'p'
      },
      text: {
        type: String,
        default: ''
      },
      addCss: {
        type: String,
        default: ''
      }
    },
    computed: {
      cssClass(): string {
        const classes = ['p-1']
        if ((this.addCss || '').trim().length > 0) {
          classes.push(this.addCss.trim())
        }
        return classes.join(' ')
      }
    }
  })
</script>
