import API, { ExtendedAPI, IApiResponse } from '../base/API'

export interface IGetBoard extends Omit<ExtendedAPI, 'data'> {
  boardID: string
}

class BoardAPI extends API {
  BoardAPIEndpoint: string
  constructor() {
    super()
    this.BoardAPIEndpoint = 'board'
  }

  public async get({
    signal,
    boardID,
  }: IGetBoard): Promise<IApiResponse | void> {
    try {
      const res = await super._get({
        uri: `${this.BoardAPIEndpoint}/${boardID}`,
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
  }: ExtendedAPI): Promise<IApiResponse | void> {
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
  }: ExtendedAPI): Promise<IApiResponse | void> {
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
  }: ExtendedAPI): Promise<IApiResponse | void> {
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
