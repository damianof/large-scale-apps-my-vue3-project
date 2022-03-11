const UrlUtils = {
  /**
   * @name getFullUrlWithParams
   * @description Returns the full formatted url for an API end-point
   * by replacing parameters place holder with the actual values.
   * @param baseUrl The base API end-point witht he params placeholders like {projectId}
   * @param params The request params object with the key/value entries for each parameter
   * @returns The fully formatted API end-point url with the actual parameter values
   */
  getFullUrlWithParams: (baseUrl: string, params: { [key: string]: number | string }): string => {
    const keys: string[] = Object.keys(params || {})
    if ((baseUrl || '').indexOf('[') === -1 || keys.length === 0) {
      return baseUrl
    }
    let fullUrl = baseUrl
    keys.forEach((key) => {
      fullUrl = fullUrl.replace(`[${key}]`, (params[key] || 'null').toString())
    })
    return fullUrl
  }
}

export { UrlUtils }
