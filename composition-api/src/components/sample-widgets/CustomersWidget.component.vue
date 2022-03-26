<template>
  <ElBaseCard :class="cssClasses">
    <ElWidgetHeader
      :id="id"
      headerText="Customer Widget"
      @close="onCloseClick"
    />
    <div class="card-body p-4">
      <div>
        Customer widget
      </div>
    </div>
  </ElBaseCard>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ElBaseCard from '@/components/primitives/cards/ElBaseCard.component.vue'
  import ElWidgetHeader from '@/components/primitives/cards/ElWidgetHeader.component.vue'
  import WidgetBase from '@/components/widgets-container/BaseWidget.component.vue'

  export default defineComponent({
    extends: WidgetBase,
    name: "CustomersWidget",
    components: {
      ElBaseCard,
      ElWidgetHeader,
      WidgetBase
    }
  })
</script>
