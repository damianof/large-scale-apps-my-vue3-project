// files: src/http-client/models/HttpClient.interface.ts

import { HttpRequestParamsInterface } from './HttpRequestParams.interface'

/**
 * @name HttpClientInterface
 * @description
 * Represents our HttpClient.
 */
 export interface HttpClientInterface {
  /**
   * @name request
   * @description 
   * A method that executes different types of http requests (i.e. GET/POST/etc)
   * based on the parameters argument.
   * The type R specify the type of the result returned
   * The type P specify the type of payload if any
   * @returns A Promise<R> as the implementation of this method will be async.
   */
  request<R, P = void>(parameters: HttpRequestParamsInterface<P>): Promise<R>
}
