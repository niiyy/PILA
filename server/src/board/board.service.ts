import { Board } from 'types/board'
import { HTTPCode } from '../types/http'
import { PromiseResponse } from 'types/misc'
import userModel from '../user/user.model'
import boardModel from './board.model'

class BoardService {
  constructor() {}

  public get({
    _id,
    userID,
  }: {
    _id: any
    userID: any
  }): Promise<PromiseResponse<Board | undefined>> {
    return new Promise(async (resolve, reject) => {
      const user = await userModel.findOne({ userID })

      // ! check if user board includes _id
      if (!user) {
        return reject({
          status: HTTPCode.UNAUTHORIZED,
          message:
            'u dont have permission to view this resource or u dont exist !',
        })
      }

      const board = await boardModel.findOne({ _id })

      if (!board) {
        return reject({
          status: HTTPCode.UNAUTHORIZED,
          message: 'u dont have permission to view this resource !',
        })
      }

      return resolve({ status: HTTPCode.OK })
    })
  }

  public create() {}
}

export default new BoardService()
