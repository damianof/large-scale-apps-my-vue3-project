<template>
  <ElBaseCard :class="cssClasses">
		<!-- will replace this place holder here with more code later -->
    <div class="card-body">
      <div>
        Customer widget
      </div>
    </div>
  </ElBaseCard>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ElBaseCard from '@/components/primitives/cards/ElBaseCard.component.vue'
  import WidgetBase from '@/components//widgets-container/BaseWidget.component.vue'

  export default defineComponent({
    extends: WidgetBase,
    name: "CustomersWidget",
    components: {
      ElBaseCard,
      WidgetBase
    }
  })
</script>
