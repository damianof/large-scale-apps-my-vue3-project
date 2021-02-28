<template>
  <div class="card-header">
    <div>
      <h5 class="header-text">{{ headerText }} [{{ id }}]</h5>
      <div class="header-tools">
        <i></i>
        <i class="material-icons icon action" @click="onCloseClick">close</i>
      </div>
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
