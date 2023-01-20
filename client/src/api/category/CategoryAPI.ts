import API, { ExtendedAPI, IApiResponse } from '../base/API'

class CategoryAPI extends API {
  CategoryAPIEndpoint: string
  constructor() {
    super()
    this.CategoryAPIEndpoint = 'category'
  }

  public async create({
    data,
    signal,
  }: ExtendedAPI): Promise<IApiResponse | void> {
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
  }: ExtendedAPI): Promise<IApiResponse | void> {
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
  }: ExtendedAPI): Promise<IApiResponse | void> {
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
