import CustomersWidget from './CustomersWidget.component.vue'
import OrdersWidget from './OrdersWidget.component.vue'
import ItemsListWidget from './ItemsListWidget.component.vue'

const widgetscatalog = new Map<string, any>()
widgetscatalog.set('customer', CustomersWidget)
widgetscatalog.set('orders', OrdersWidget)
widgetscatalog.set('items', ItemsListWidget)

export const WidgetsCatalog = widgetscatalog
