import { expect } from 'chai'
import { config } from '@/config'

describe('config', () => {
  it('instance should have "global" section', () => {
    expect(config).to.have.own.property('global')
  })

  it('instance should have "items" section', () => {
    expect(config).to.have.own.property('items')
  })

  describe('global', () => {
    const section = config.global
    // tests against the global section
  })

  describe('items', () => {
    const section = config.items

    it('section should have "apiUrls" property', () => {
      expect(section).to.have.own.property('apiUrls')
    })

    describe('apiUrls', () => {
      const apiUrls = section.apiUrls

      it('section should have "fetchItems" property', () => {
        expect(apiUrls).to.have.own.property('fetchItems')
        // verify that fetchItems url is a string and has a reasonable length
        expect(apiUrls.fetchItems).to.be.a('string')
        expect(apiUrls.fetchItems).to.have.length.greaterThan(10)
      })
    })
  })
})
