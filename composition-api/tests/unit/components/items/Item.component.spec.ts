import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import ItemComponent from '@/components/items/children/Item.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'

describe('Item.component.vue', () => {
  it('renders an Item correctly', () => {
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

    const classes = wrapper.classes()
    expect(classes)
      .to.be.an('array')
      .that.includes('item')

    // this just tests that the entire text rendered by the component somewhere rendered
    // 'Unit test item 1', but this is not very precise.
    expect(wrapper.text()).to.include('Unit test item 1')

    // this is more precise as we are selecting the div with the class name and check if it rendered the correct text
    let domEl = wrapper.find('div.name')
    expect(domEl.text()).to.equal('Unit test item 1')
  })

  it('has expected css class when selected is false', () => {
    const model: ItemInterface = {
      id: 2,
      name: 'Unit test item 2',
      selected: false
    }

    const wrapper = mount(ItemComponent, {
      props: {
        model: model,
        isLast: false
      }
    })

    // check component css classes list
    const classes = wrapper.classes()
    expect(classes)
      .to.be.an('array')
      .that.includes('item')
    expect(classes)
      .to.be.an('array')
      .that.does.not.includes('selected')
  })

  it('has selected css class when selected is true', () => {
    const model: ItemInterface = {
      id: 3,
      name: 'Unit test item 3',
      selected: true /* setting selected = true here */
    }

    const wrapper = mount(ItemComponent, {
      props: {
        model: model,
        isLast: false
      }
    })

    // check component css classes list
    const classes = wrapper.classes()
    expect(classes)
      .to.be.an('array')
      .that.includes('item')
      expect(classes)
        .to.be.an('array')
        .that.includes('selected')
  })
})
