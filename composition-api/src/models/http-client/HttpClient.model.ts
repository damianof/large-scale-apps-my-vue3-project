import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { HttpRequestParamsInterface } from './HttpRequestParams.interface'
import { HttpClientInterface } from './HttpClient.interface'
import { config } from '@/config'

/**
 * @name HttpClientModel
 * @description
 * Wraps http client functionality to avoid directly using a third party npm package like axios
 * and simplify replacement in the future if such npm package would stop being developed or other reasons
 */
export class HttpClientModel implements HttpClientInterface {
  private getToken(): string {
    // get token key from App config
    const TOKEN_KEY = config.httpClient.tokenKey || 'myapp-token'
    const token = localStorage.getItem(TOKEN_KEY) || ''
    return token
  }

  constructor() {
    // OPTIONAL for now: Add request interceptor to handle errors or other things for each request in one place
  }

  get<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters

      // axios options
      const options: AxiosRequestConfig = {
        headers: {}
      }

      if (requiresToken) {
        const token = this.getToken()
        options.headers.RequestVerificationToken = token
      }

      axios
        .get(url, options)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: any) => {
          console.info('------ rejecting ----')
          reject(response)
        })
    })
  }

  post<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken, payload } = parameters

      // axios options
      const options: AxiosRequestConfig = {
        headers: {}
      }

      if (requiresToken) {
        const token = this.getToken()
        options.headers.RequestVerificationToken = token
      }

      axios
        .post(url, payload, options)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: any) => {
          reject(response)
        })
    })
  }
}
