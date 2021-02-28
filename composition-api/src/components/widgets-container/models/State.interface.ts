import { WidgetInfoInterface } from './WidgetInfo.interface'

export interface StateInterface {
  widgets: WidgetInfoInterface[]
  addingWidget: boolean
  removingWidget: boolean
}
