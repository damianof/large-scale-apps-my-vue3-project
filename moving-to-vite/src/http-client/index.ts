// file: src/http-client/index.ts

import { HttpClientInterface } from './models/HttpClient.interface'
import { HttpClientAxios } from './models/HttpClient.axios'

// export instance of HttpClientInterface
export const httpClient: HttpClientInterface = new HttpClientAxios()

// also export all our interfaces/models/enums
export * from './models'
