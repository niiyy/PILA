import API, { JsonResponse } from '../base/API'

class BoardAPI extends API {
  BoardAPIEndpoint: string
  constructor() {
    super()
    this.BoardAPIEndpoint = 'board'
  }

  public async get({
    signal,
  }: {
    signal: AbortSignal
  }): Promise<JsonResponse | void> {
    try {
      const res = await super._get({
        uri: `${this.BoardAPIEndpoint}`,
        signal,
      })

      return res
    } catch (error) {
      throw new Error(error as string)
    }
  }

  public async create({
    data,
    signal,
  }: {
    signal: AbortSignal
    data: any
  }): Promise<JsonResponse | void> {
    try {
      const res = await super._post({
        uri: `${this.BoardAPIEndpoint}`,
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
  }: {
    signal: AbortSignal
    data: any
  }): Promise<JsonResponse | void> {
    try {
      const res = await super._put({
        uri: `${this.BoardAPIEndpoint}`,
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
        uri: `${this.BoardAPIEndpoint}`,
        signal,
        data,
      })

      return res
    } catch (error) {
      throw new Error(error as string)
    }
  }
}

export default new BoardAPI()
