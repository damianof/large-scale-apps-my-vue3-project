import { 
  WidgetInfoInterface, 
  ActionsInterface,
  StoreInterface
} from '../models'

export class Actions implements ActionsInterface {
  private readonly store!: StoreInterface

  constructor(store: StoreInterface) {
    this.store = store
  }

  addWidget(childInfo: WidgetInfoInterface) {
    if (!this.store.state.addingWidget) {
      this.store.mutations.addingWidget()
      this.store.mutations.addWidget(childInfo)
    }
  }

  removeWidgetById(id: number) {
    if (!this.store.state.removingWidget) {
      this.store.mutations.removingWidget()
      this.store.mutations.removeWidgetById(id)
    }
  }
}
