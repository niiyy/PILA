export interface JsonResponse<T = any> {
  ok: string
  data?: T
  message?: string
}

export interface APIT<T = any> {
  uri: string
  signal?: AbortSignal
  data?: T
}

export interface GetAPI<T = any> extends APIT<T> {}

export interface PostAPI<T = any> extends APIT<T> {}

class API {
  API_URL: string
  API_ENDPOINT: string
  constructor() {
    this.API_URL = 'http://localhost:4000'
    this.API_ENDPOINT = 'api/v1'
  }

  protected async get({
    uri,
    signal,
    data: RequestData,
  }: GetAPI): Promise<JsonResponse | void> {
    try {
      const response = await fetch(
        `${this.API_URL}/${this.API_ENDPOINT}/${uri}`,
        {
          body: JSON.stringify(RequestData),
          signal,
          method: 'get',
          credentials: 'include',
        }
      )

      const data = await response.json()

      return data
    } catch (error) {
      throw new Error(`ERROR while getting ${uri}`)
    }
  }

  protected async post<T>({
    uri,
    signal,
    data,
  }: PostAPI<T>): Promise<JsonResponse | void> {
    try {
      const res = await fetch(`${this.API_URL}/${this.API_ENDPOINT}/${uri}`, {
        body: JSON.stringify(data),
        signal,
        method: 'post',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
      })

      const response = await res.json()

      return response
    } catch (error) {
      throw new Error(`ERROR while posting ${uri}`)
    }
  }
}

export default API
