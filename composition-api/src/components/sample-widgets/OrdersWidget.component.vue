<template>
  <ElBaseCard :class="cssClasses">
		<!-- will replace this place holder here with more code later -->
    <div class="card-header">
      <div>
        Orders widget
      </div>
    </div>
    <div class="card-body">
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
  import WidgetBase from '@/components//widgets-container/BaseWidget.component.vue'

  export default defineComponent({
    extends: WidgetBase,
    name: "OrdersWidget",
    components: {
      ElBaseCard,
      WidgetBase
    }
  })
</script>

