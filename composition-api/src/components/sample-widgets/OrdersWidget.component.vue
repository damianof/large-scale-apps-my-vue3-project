<template>
  <ElBaseCard :class="cssClasses">
		<ElWidgetHeader
      :id="id"
      headerText="Orders Widget"
      @close="onCloseClick"
    />
    <div class="card-body p-4">
      Order widget
      <ul>
        <li>Order 1</li>
        <li>Order 2</li>
        <li>....</li>
      </ul>
    </div>
  </ElBaseCard>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ElBaseCard from '@/components/primitives/cards/ElBaseCard.component.vue'
  import ElWidgetHeader from '@/components/primitives/cards/ElWidgetHeader.component.vue'
  import WidgetBase from '@/components//widgets-container/BaseWidget.component.vue'

  export default defineComponent({
    extends: WidgetBase,
    name: "OrdersWidget",
    components: {
      ElBaseCard,
      ElWidgetHeader,
      WidgetBase
    }
  })
</script>

