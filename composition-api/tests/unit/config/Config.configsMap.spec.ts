import { expect } from 'chai'
import { configsMap } from '@/config'

describe('configsMap', () => {
  it('instance should have "mock" key', () => {
    expect(configsMap.has('mock')).to.equal(true)
  })

  it('instance should have "local" key', () => {
    expect(configsMap.has('local')).to.equal(true)
  })

  it('instance should have "beta" key', () => {
    expect(configsMap.has('beta')).to.equal(true)
  })

  it('instance should have "live" key', () => {
    expect(configsMap.has('live')).to.equal(true)
  })
})
