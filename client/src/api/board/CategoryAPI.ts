import API from '../base/API'
import { JsonResponse } from '../base/API'

class CategoryAPI extends API {
  CategoryAPIEndpoint: string
  constructor() {
    super()
    this.CategoryAPIEndpoint = 'category'
  }

  public async get({
    data,
    signal,
  }: {
    signal: AbortSignal
    data: any
  }): Promise<JsonResponse | void> {
    try {
      const res = await super._get({
        uri: `${this.CategoryAPIEndpoint}`,
        signal,
        data,
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
        uri: `${this.CategoryAPIEndpoint}`,
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
        uri: `${this.CategoryAPIEndpoint}`,
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
        uri: `${this.CategoryAPIEndpoint}`,
        signal,
        data,
      })

      return res
    } catch (error) {
      throw new Error(error as string)
    }
  }
}

export default new CategoryAPI()
