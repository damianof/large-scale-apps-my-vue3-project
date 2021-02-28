import BaseWidget from '../BaseWidget.component.vue'

export interface WidgetInfoInterface {
  id: number
  containerId: number
  position: number
  component: typeof BaseWidget
  props: any
}
