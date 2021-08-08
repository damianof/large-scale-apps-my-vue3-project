<template>
  <div :class="cssClasses">
    <ElText tag="h5" :text="`WidgetsContainer: ${ title }`"/>
    <div class="container-body">
      <template v-for="(widgetInfo, index) in widgets" :key="index">
        <component
          :is="widgetInfo.component"
          v-bind="widgetInfo.props"
          @close="onCloseChild"
        ></component>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, computed } from 'vue'
  import ElText from '@/components/primitives/text/ElText.vue'
  import { 
    WidgetInfoInterface,
    StoreInterface,
    StateInterface
  } from './models'
  import { 
    Store
  } from './store/Store'

  // shared state/store across all WidgetsContainer instances
  // (To not make it shared, moved into the setup() method, but then cannot do drag and drop between different containers)
  const state: StateInterface = reactive({
    widgets: [] as WidgetInfoInterface[],
    addingWidget: false,
    removingWidget: false
  })
  // store instance
  const store: StoreInterface = new Store(state)

  export default defineComponent({
    components: {
      ElText
    },
    props: {
      containerId: {
        type: Number,
        default: -1
      },
      title: {
        type: String,
        default: 'not-set'
      },
      addCss: {
        type: String,
        default: ''
      }
    },
    setup(props) {
      // setup return object
      return {
        cssClasses: computed((): string => {
          const classes = ['widgets-container']
          const addCss = (props.addCss || '').trim()
          if (addCss) {
            classes.push(addCss)
          }
          return classes.join(' ')
        }),
        widgets: computed((): WidgetInfoInterface[] => {
          return (store.state.widgets || []).filter(widgetInfo => widgetInfo.containerId === props.containerId)
        }),
        addWidget(childInfo: WidgetInfoInterface) {
          console.log('addWidget', childInfo)
          store.actions.addWidget(childInfo)
        },
        removeWidgetById(id: number) {
          console.log('removeWidgetById', id)
          store.actions.removeWidgetById(id)
        },
        onCloseChild(id: number) {
          console.log('onCloseChild', id)
          store.actions.removeWidgetById(id)
        }
      }
    }
  })
</script>
