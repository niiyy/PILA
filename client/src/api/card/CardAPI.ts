import API, { ExtendedAPI, IApiResponse } from '../base/API'

class CardAPI extends API {
  CardAPIEndpoint: string
  constructor() {
    super()
    this.CardAPIEndpoint = 'card'
  }

  public async create({
    signal,
    data,
  }: ExtendedAPI): Promise<IApiResponse | void> {
    try {
      const res = await super._post({
        uri: `${this.CardAPIEndpoint}`,
        signal,
        data,
      })

      return res
    } catch (error) {
      throw new Error(error as string)
    }
  }

  public async update({
    data,
    signal,
  }: ExtendedAPI): Promise<IApiResponse | void> {
    try {
      const res = await super._put({
        uri: `${this.CardAPIEndpoint}`,
        signal,
        data,
      })

      return res
    } catch (error) {
      throw new Error(error as string)
    }
  }

  public async delete({
    data,
    signal,
  }: ExtendedAPI): Promise<IApiResponse | void> {
    try {
      const res = await super._delete({
        uri: `${this.CardAPIEndpoint}`,
        signal,
        data,
      })

      return res
    } catch (error) {
      throw new Error(error as string)
    }
  }
}

export default new CardAPI()
