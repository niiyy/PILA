import API, { JsonResponse } from '../base/API'

class CardAPI extends API {
  CardAPIEndpoint: string
  constructor() {
    super()
    this.CardAPIEndpoint = 'card'
  }

  public async create({
    signal,
  }: {
    signal: AbortSignal
  }): Promise<JsonResponse | void> {
    try {
      const res = await super._post({
        uri: `${this.CardAPIEndpoint}`,
        signal,
      })

      return res
    } catch (error) {
      throw new Error(error as string)
    }
  }

  public async update({
    data,
    signal,
  }: {
    signal: AbortSignal
    data: any
  }): Promise<JsonResponse | void> {
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
  }: {
    signal: AbortSignal
    data: any
  }): Promise<JsonResponse | void> {
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
