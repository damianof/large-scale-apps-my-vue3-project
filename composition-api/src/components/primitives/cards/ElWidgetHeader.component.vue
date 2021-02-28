<template>
  <div class="card-header p-4 flex items-center justify-between flex-wrap bg-white border-b border-gray-200">
    <h5 class="header-text text-lg leading-6 font-medium text-gray-900">{{ headerText }} [{{ id }}]</h5>
    <div class="header-tools">
      <i></i>
      <button @click="onCloseClick" class="cursor-pointer text-blue-700 hover:text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
        width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      id: {
        type: Number,
        default: -1
      },
      headerText: {
        type: String,
        default: 'Header Text Not Set'
      }
    },
    emits: ['close'],
    methods: {
      onCloseClick(id: number) {
        this.$emit('close', id)
      }
    }
  })
</script>
