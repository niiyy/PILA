import { Board, BoardCreation } from 'types/board'
import { HTTPCode } from '../types/http'
import { PromiseResponse } from 'types/misc'
import userModel from '../user/user.model'
import BoardModel from './board.model'
import boardValidator from './board.validator'
import { Types } from 'mongoose'

class BoardService {
  constructor() {}

  public async get({
    _id,
    userID,
  }: {
    _id: Types.ObjectId
    userID: Types.ObjectId
  }): Promise<any> {
    try {
      const user = await userModel.findOne({ userID })

      if (!user || !user.boards.includes(_id)) {
        throw new Error(
          'u dont have permission to view this resource or u dont exist !'
        )
      }

      const board = await BoardModel.findOne({ _id })

      if (!board) {
        throw new Error('u dont have permission to view this resource !')
      }

      return board
    } catch (err) {
      throw new Error('An error occured while trying to get board')
    }
  }

  private async addBoardToUser({
    boardID,
    userID,
  }: {
    boardID: Types.ObjectId
    userID: Types.ObjectId
  }): Promise<any> {
    try {
      const user = await userModel.findByIdAndUpdate(
        userID,
        { $push: { boards: boardID } },
        { new: true }
      )

      return user
    } catch (error) {
      throw new Error('An error occured while trying to add the user')
    }
  }

  public async create({
    title,
    userID,
  }: BoardCreation & { userID: Types.ObjectId }) {
    const { isValid, error } = boardValidator.validateCreation({
      title,
    })

    if (!isValid) {
      throw new Error('Invalid data')
    }

    const user = await userModel.findOne({
      _id: userID,
    })

    if (!user) {
      throw new Error('User not found')
    }

    try {
      const board = await BoardModel.create({
        title,
        author: userID,
        users: [userID],
      })

      const userUpdated = await this.addBoardToUser({
        boardID: board._id,
        userID,
      })

      return board
    } catch (error) {
      throw new Error('An error occured while trying to add the user')
    }
  }
}

export default new BoardService()
