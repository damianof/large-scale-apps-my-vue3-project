import { WidgetInfoInterface } from './WidgetInfo.interface'

export interface MutationsInterface {
  addingWidget(): void
  addWidget(childInfo: WidgetInfoInterface): void
  removingWidget(): void
  removeWidgetById(id: number): void
}
