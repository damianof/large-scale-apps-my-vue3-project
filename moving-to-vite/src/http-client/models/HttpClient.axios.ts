// file: src/http-client/models/HttpClient.axios.ts

import axios, {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

import { HttpRequestParamsInterface } from './HttpRequestParams.interface'
import { HttpClientInterface } from './HttpClient.interface'
import { HttpRequestType } from './HttpRequestType.enum'


/**
 * @name HttpClientAxios
 * @description
 * Wraps http client functionality to avoid directly using a third party npm package like axios
 * and simplify replacement in the future if such npm package would stop being developed or other reasons
 */
export class HttpClientAxios implements HttpClientInterface {

  constructor() {
    // OPTIONAL for now: Add request interceptor to handle errors or other things for each request in one place
  }

  /**
   * @name request
   * @description
   * A method that executes different types of http requests (i.e. GET/POST/etc)
   * based on the parameters argument.
   * The type R specify the type of the result returned
   * The type P specify the type of payload if any
   * @returns A Promise<R> as the implementation of this method will be async.
   */
  async request<R, P = void>(parameters: HttpRequestParamsInterface<P>): Promise<R> {
    // use destructuring to extract our parameters into local variables
    const { requestType, url, requiresToken, payload } = parameters

    // TODO: later might add an helper to build the fullUrl with request parameters derived from the payload
    const fullUrl = url

    // set axios options
    const options: AxiosRequestConfig = {
        headers: {}
    }

    // set headers Authorization
    if (requiresToken && options.headers) {
      // optional: you could add coded here to set the Authorization header with a bearer token
      // options.headers.Authorization = `bearer ...`
    }

    let result!: R

    try {
      switch(requestType) {
        // executes a get request:
        case HttpRequestType.get: {
          const response = await axios.get(fullUrl, options)
          result = response?.data as R
          break
        }

        // executes a post request:
        case HttpRequestType.post: {
          const response = await axios.post(fullUrl, payload, options)
          result = response?.data as R
          break
        }

        // executes a put request:
        case HttpRequestType.put: {
          const response = await axios.put(fullUrl, payload, options)
          result = response?.data as R
          break
        }

        // executes a delete request:
        case HttpRequestType.delete: {
          const response = await axios.delete(fullUrl, options)
          result = response?.data as R
          break
        }

        default: {
          console.warn('HttpClient: invalid requestType argument or request type not implemented')
        }
      }
    } catch (e) {
      //console.error('HttpClient exception', e)
      throw Error('HttpClient exception')
    }

    return result
  }
}
