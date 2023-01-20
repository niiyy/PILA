import API, { ExtendedAPI, IApiResponse } from '../base/API'

class AuthAPI extends API {
  private AuthAPIEndpoint: string
  constructor() {
    super()
    this.AuthAPIEndpoint = 'auth'
  }

  public async createUser({
    data,
    signal,
  }: ExtendedAPI): Promise<IApiResponse | void> {
    try {
      const res = await super._post({
        uri: `${this.AuthAPIEndpoint}/register`,
        signal,
        data,
      })

      return res
    } catch (error) {
      throw new Error(error as string)
    }
  }

  public async loginUser({
    data,
    signal,
  }: ExtendedAPI): Promise<IApiResponse | void> {
    try {
      const res = await super._post({
        uri: `${this.AuthAPIEndpoint}/login`,
        signal,
        data,
      })

      return res
    } catch (error) {
      throw new Error(error as string)
    }
  }

  public async isUserConnected({
    signal,
  }: ExtendedAPI): Promise<IApiResponse | void> {
    try {
      const res = await super._get({
        uri: `${this.AuthAPIEndpoint}/checkToken`,
        signal,
      })

      return res
    } catch (error) {
      throw new Error(error as string)
    }
  }
}

export default new AuthAPI()
