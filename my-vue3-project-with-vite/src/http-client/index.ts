// file: src/http-client/index.ts

import { HttpClientInterface } from './models/HttpClient.interface'
import { HttpClientAxios } from './models/HttpClient.axios'
//import { config } from '@/config'

// export instance of HttpClientInterface
//export const httpClient: HttpClientInterface = new HttpClientAxios(config.httpClient)
export const httpClient: HttpClientInterface = new HttpClientAxios() // temporarily avoiding config to make vite unit tests happy

// also export all our interfaces/models/enums
export * from './models'
