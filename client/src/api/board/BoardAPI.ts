import API from '../base/API'
import { JsonResponse } from '../base/API'

class AuthAPI extends API {
  constructor() {
    super()
  }

  public async create({
    signal,
  }: {
    signal: AbortSignal
  }): Promise<JsonResponse | void> {
    try {
      const res = await super.get({
        uri: 'http://localhost:4000/api/auth/checkToken',
        signal,
      })

      return res
    } catch (error) {
      throw new Error('CACA')
    }
  }
}

export default new AuthAPI()
