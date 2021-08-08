import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import apiMockClient from './mock'
import apiLiveClient from './live'
import { config } from '@/config'

// return either the live or the mock client
let apiClient: ApiClientInterface
if (config.apiClient.type === 'live') {
  apiClient = apiLiveClient
} else if (config.apiClient.type === 'mock') {
  apiClient = apiMockClient
} else {
  throw Error('Invalid or undefined config.apiClient.type')
}

export default apiClient
