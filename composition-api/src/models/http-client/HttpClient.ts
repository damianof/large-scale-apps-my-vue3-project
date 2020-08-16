import { HttpClientInterface } from './HttpClient.interface'
import { HttpClientModel } from './HttpClient.model'

// export instance of HttpClientModel
export const HttpClient: HttpClientInterface = new HttpClientModel()
