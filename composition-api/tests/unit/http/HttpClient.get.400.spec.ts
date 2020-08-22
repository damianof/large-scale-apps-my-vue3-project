import { expect } from 'chai'
import sinon from 'sinon'
import axios, { AxiosRequestConfig } from 'axios'
import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'
import { MockedPromiseFactory } from './MockedPromiseFactory'

const mockParams: HttpRequestParamsInterface = {
  url: 'path/to/a/get/api/endpoint',
  requiresToken: false
}

describe('HttpClient.get', () => {
  before(() => {
    const mockedRequestConfig = {
      headers: {}
    } as AxiosRequestConfig

    const mockedPromise = MockedPromiseFactory({
      url: mockParams.url,
      statusCode: 400,
      statusText: 'Error',
      requestConfig: mockedRequestConfig,
      data: 'get completed with errors',
      reject: true
    })

    // since HttpClient uses axios internally, stub axios here
    sinon
      .stub(axios, 'get')
      .withArgs(mockParams.url, mockedRequestConfig)
      .returns(mockedPromise)
  })

  after(() => {
    sinon.restore()
  })

  it('should reject and return 400', done => {
    HttpClient.get<string>(mockParams)
      .then((response: any) => {
        // should not get in here
      })
      .catch((response: any) => {
        expect(response.status).to.equal(400)
        done()
      })
  })
})
