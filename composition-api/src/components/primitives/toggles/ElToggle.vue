<template>
  <button type="button" :class="cssClass" @click="onClick">
    <span :class="innerCssClass"></span>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ElToggle',
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      addCss: {
        type: String,
        default: ''
      }
    },
    emits: ['clicked'],
    methods: {
      onClick() {
        // proceed only if the toggle is not disabled, otherwise ignore the click
        if (!this.disabled) {
          this.$emit('clicked')
        }
      }
    },
    computed: {
      cssClass(): string {
        const classes = ['relative inline-flex flex-shrink-0 h-6 w-12 border-1 rounded-full cursor-pointer transition-colors duration-200 focus:outline-none']
        if (this.checked) {
          classes.push('bg-green-400')
        } else {
          classes.push('bg-gray-300')
        }
        if (this.disabled) {
          classes.push('opacity-40 cursor-not-allowed')
        }
        if ((this.addCss || '').trim().length > 0) {
          classes.push(this.addCss.trim())
        }
        return classes.join(' ')
      },
      innerCssClass(): string {
        const classes = ['bg-white shadow pointer-events-none inline-block h-6 w-6 rounded-full transform ring-0 transition duration-200']
        if (this.checked) {
          classes.push('translate-x-6')
        } else {
          classes.push('translate-x-0')
        }
        return classes.join(' ')
      }
    }
  })
</script>
