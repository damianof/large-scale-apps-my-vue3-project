// file: src/api-client/index.ts

import { ApiClientInterface } from './models'
import { apiMockClient } from './mock'
import { apiLiveClient } from './live'

import { config } from '@/config'
console.log(`config.apiClient.type "${config.apiClient.type}"`)

// return either the live or the mock client
let apiClient: ApiClientInterface
if (config.apiClient.type === 'live') {
  apiClient = apiLiveClient
} else {
  apiClient = apiMockClient
}

export { apiClient }
