import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MockedPromiseFactoryParamsInterface {
  url: string
  requestConfig: AxiosRequestConfig
  statusCode: number
  statusText: string
  data: any
  reject: boolean
}

export const MockedPromiseFactory = (
  params: MockedPromiseFactoryParamsInterface
): Promise<AxiosResponse<string>> => {
  return new Promise<AxiosResponse<string>>((resolve, reject) => {
    setTimeout(() => {
      const response: AxiosResponse = {
        data: params.data,
        status: params.statusCode,
        statusText: params.statusText,
        headers: {},
        config: params.requestConfig
      }

      if (params.reject) {
        reject(response)
      } else {
        resolve(response)
      }
    }, 100)
  })
}
