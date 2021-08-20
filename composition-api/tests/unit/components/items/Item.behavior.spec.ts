import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import ItemComponent from '@/components/items/children/Item.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'

describe('Item.component.vue: behavior', () => {

  it('should emit "selected" when clicked', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    }

    const wrapper = mount(ItemComponent, {
      props: {
        model: model,
        isLast: false
      }
    })

    //  trigger "click" event
    //let domEl = wrapper.find('div.name')
    wrapper.trigger('click')

    // chcek that it emitted the "selected" event and passed the expected param value (the model of type ItemInterface)
    const emitted: any = wrapper.emitted() // this will be an object like {"select":[[{"id":1,"name":"Unit test item 1","selected":false}]]}
    expect(emitted.select).to.not.be.undefined
    const expectedModel = emitted.select[0][0]
    expect(expectedModel).to.not.be.undefined
    expect(expectedModel.id).to.equal(model.id)
  })

})
