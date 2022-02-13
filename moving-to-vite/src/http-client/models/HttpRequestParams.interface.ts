// file: src/http-client/models/HttpRequestParams.interface.ts

import { HttpRequestType } from './HttpRequestType.enum'

/**
 * @name HttpRequestParamsInterface
 * @description 
 * Interface represents an object we'll use to pass arguments into our HttpClient request method.
 * This allow us to specify the type of request we want to execute, the end-point url, 
 * if the request should include an authentication token, and an optional payload (if POST or PUT for example)
 */
export interface HttpRequestParamsInterface<P = void> {
  requestType: HttpRequestType
  url: string
  requiresToken: boolean
  payload?: P
}
