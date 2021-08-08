import { 
  WidgetInfoInterface, 
  MutationsInterface,
  StateInterface
} from '../models'

export class Mutations implements MutationsInterface {
  private state!: StateInterface

  constructor(state: StateInterface) {
    this.state = state
  }

  private nextId(): number {
    // get max id and increase by 1
    let id: number = 0
    const items = this.state.widgets || []
    if (items.length > 0) {
      const itemWithMaxId = items.reduce((prev, current) => (prev.id > current.id ? prev : current))
      id = 1 + itemWithMaxId.id
    }
    return id
  }

  addingWidget(): void {
    console.log('state: addingWidget')
    this.state.addingWidget = true
  }

  addWidget(childInfo: WidgetInfoInterface): void {
    console.log('state: addWidget')
    childInfo.id = this.nextId()
    childInfo.props.id = childInfo.id

    this.state.widgets.push(childInfo) // add to the bottom of the list
    
    this.state.addingWidget = false
  }

  removingWidget() {
    console.log('state: removingWidget')
    this.state.removingWidget = true
  }

  removeWidgetById(id: number) {
    console.log('state: removeWidgetById')
    this.state.widgets = this.state.widgets.filter((c: WidgetInfoInterface) => c.id !== id)
    this.state.removingWidget = false
  }
}
