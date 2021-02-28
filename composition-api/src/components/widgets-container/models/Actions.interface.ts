import { WidgetInfoInterface } from './WidgetInfo.interface'

export interface ActionsInterface {
  addWidget(childInfo: WidgetInfoInterface): void
  removeWidgetById(id: number): void
}
