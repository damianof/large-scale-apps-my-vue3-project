<template>
  <ElBaseCard :class="cssClasses">
    <ElWidgetHeader
      :id="id"
      headerText="ListItems Widget"
      @close="onCloseClick"
    />
    <div class="card-body p-4">
      <ul v-show="!loading" class="bg-white">
        <ItemComponent v-for="(item, index) in items" 
          :key="item.id" 
          :isLast="index === items.length-1" 
          :model="item" @select="onItemSelect" />
      </ul>
      <Loader v-show="loading" class="h-24"/>
    </div>
  </ElBaseCard>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed, onMounted } from 'vue'
  import { ItemInterface } from '@/models/items/Item.interface'
  import ItemComponent from '@/components/items/children/Item.component.vue'
  import Loader from '@/components/shared/Loader.component.vue'
  import ElBaseCard from '@/components/primitives/cards/ElBaseCard.component.vue'
  import ElWidgetHeader from '@/components/primitives/cards/ElWidgetHeader.component.vue'
  import WidgetBase from '@/components/widgets-container/BaseWidget.component.vue'
  import { useItemsStore } from '@/store/items'
  import { MutationType, StoreModuleNames } from '@/models/store'
  import { useI18n } from 'vue-i18n'

  export default defineComponent({
    extends: WidgetBase,
    name: "ItemsListWidget",
    components: {
      ElBaseCard,
      ElWidgetHeader,
      WidgetBase,
      ItemComponent,
      Loader
    },
    setup() {
      const i18n = useI18n()

      const itemsStore = useItemsStore()
      const items = computed(() => {
        return itemsStore.state.items
      })
      const loading = computed(() => {
        return itemsStore.state.loading
      })

      onMounted(() => {
        itemsStore.action(MutationType.items.loadItems)
      })

      const onItemSelect = (item: ItemInterface) => {
        itemsStore.action(MutationType.items.selectItem, {
          id: item.id,
          selected: !item.selected
        })
      }

      return {
        i18n,
        items,
        loading,
        onItemSelect
      }
    }
  })
</script>
