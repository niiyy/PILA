export interface IApiResponse<T = any> {
  ok: string
  data?: T
  message?: string
}

export interface APIT<T = any> {
  uri: string
  signal?: AbortSignal
  data?: T
}

export interface ExtendedAPI extends Omit<APIT, 'uri'> {}

class API {
  private API_URL: string
  private API_ENDPOINT: string
  constructor() {
    this.API_URL = 'http://localhost:4000'
    this.API_ENDPOINT = 'api/v1'
  }

  protected async _get({ uri, signal }: APIT): Promise<IApiResponse | void> {
    try {
      const response = await fetch(
        `${this.API_URL}/${this.API_ENDPOINT}/${uri}`,
        {
          signal,
          method: 'get',
          credentials: 'include',
        }
      )

      const data = await response.json()

      return data
    } catch (error) {
      console.log(error)
      throw new Error(`ERROR while getting ${uri}`)
    }
  }

  protected async _post({
    uri,
    signal,
    data = {},
  }: APIT): Promise<IApiResponse | void> {
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

  protected async _put<T>({
    uri,
    signal,
    data = {},
  }: APIT): Promise<IApiResponse | void> {
    try {
      const res = await fetch(`${this.API_URL}/${this.API_ENDPOINT}/${uri}`, {
        body: JSON.stringify(data),
        signal,
        method: 'put',
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

  protected async _delete<T>({
    uri,
    signal,
    data = {},
  }: APIT): Promise<IApiResponse | void> {
    try {
      const res = await fetch(`${this.API_URL}/${this.API_ENDPOINT}/${uri}`, {
        body: JSON.stringify(data),
        signal,
        method: 'delete',
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
