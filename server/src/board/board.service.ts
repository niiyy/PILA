import { Types } from 'mongoose'
import { BoardCreation, BoardUpdate } from 'types/board'
import UserModel from '../user/user.model'
import { default as boardModel, default as BoardModel } from './board.model'
import boardValidator from './board.validator'

class BoardService {
  constructor() {}

  public async get({
    _id,
    userID,
  }: {
    _id: string
    userID: string
  }): Promise<any> {
    try {
      const user = await UserModel.findOne({ userID, boards: { $in: _id } })

      if (!user) {
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
      const user = await UserModel.findByIdAndUpdate(
        userID,
        { $push: { boards: new Types.ObjectId(boardID) } },
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
    const { isValid, data } = boardValidator.validateCreation({
      title,
    })

    if (!isValid) {
      throw new Error('Invalid data')
    }

    const user = await UserModel.findOne({
      _id: userID,
    })

    if (!user) {
      throw new Error('User not found')
    }

    try {
      const board = await BoardModel.create({
        title: data.title,
        author: new Types.ObjectId(userID),
        users: [new Types.ObjectId(userID)],
      })

      await this.addBoardToUser({
        boardID: board._id,
        userID,
      })

      return board
    } catch (error) {
      throw new Error('An error occured while trying to add the user')
    }
  }

  public async delete({
    _id,
    userID,
  }: {
    _id: Types.ObjectId
    userID: Types.ObjectId
  }) {
    if (!_id) {
      throw new Error('Invalid Data')
    }

    try {
      await BoardModel.findOneAndDelete({
        _id,
        author: new Types.ObjectId(userID),
      })
    } catch (error) {
      throw new Error('cant delete the user board')
    }
  }

  public async idUserBoardAuthor({
    boardID,
    userID,
  }: {
    boardID: string
    userID: string
  }) {
    try {
      const board = await BoardModel.exists({
        _id: boardID,
        author: userID,
      })

      if (!board) {
        throw new Error('User is not the author !')
      }

      return board
    } catch (error) {
      throw new Error('User cant delete this !')
    }
  }

  public async doesBoardHaveUser({
    boardID,
    userID,
  }: {
    userID: string
    boardID: string
  }) {
    try {
      const board = await BoardModel.exists({
        _id: boardID,
        users: {
          $in: [userID],
        },
      })

      if (!board) {
        throw new Error('User in board not found !')
      }

      return board
    } catch (error) {
      throw new Error('User cant delete this !')
    }
  }

  public async update({
    data: BoardData,
    userID,
    boardID,
  }: BoardUpdate & { userID: string }) {
    const { isValid, data, error } = boardValidator.validateUpdate({
      data: BoardData,
      boardID,
    })

    if (!isValid) {
      throw new Error(error?.message)
    }

    try {
      await this.idUserBoardAuthor({
        boardID,
        userID,
      })

      const boardUpdated = await boardModel.findOneAndUpdate(
        {
          _id: boardID,
        },
        {
          title: data.data.title,
        }
      )

      return boardUpdated
    } catch (error) {
      throw new Error('Cant update the board')
    }
  }
}

export default new BoardService()
