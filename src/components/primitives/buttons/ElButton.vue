<template>
  <button type="button" :class="cssClass" :disabled="disabled" @click="onClick">
    <span>{{ label }}</span>
  </button>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'

  export default defineComponent({
    name: 'ElButton',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: 'label text'
      },
      addCss: {
        type: String,
        default: ''
      }
    },
    emits: ['clicked'],
    methods: {
      onClick() {
        // proceed only if the button is not disabled, otherwise ignore the click
        if (!this.disabled) {
          this.$emit('clicked')
        }
      }
    },
    computed: {
      cssClass(): string {
        let classes = ['font-bold py-1 px-2 border rounded']

        if (this.disabled) {
    			// these are the button CSS classes when disabled
          classes.push('bg-gray-500 text-gray-300 opacity-50 cursor-not-allowed')
        } else {
    			// these are the button CSS classes when enabled
          classes.push('bg-blue-500 text-white hover:bg-blue-400')
        }

        // addCss will have additional CSS class 
        // we want to apply from where we consume this component
        if ((this.addCss || '').trim().length > 0) {
          classes.push(this.addCss.trim())
        }
        return classes.join(' ')
      }
    }
  })
</script>
