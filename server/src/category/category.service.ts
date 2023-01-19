import BoardService from '../board/board.service'
import { CategoryDeletion, CategoryUpdate } from 'types/category'
import UserModel from 'user/user.model'
import BoardModel from '../board/board.model'
import CategoryModel from './category.model'
import CategoryValidator from './category.validator'
import boardService from '../board/board.service'

class CategoryService {
  constructor() {}

  public async delete({
    categoryID,
    boardID,
    userID,
  }: CategoryDeletion & { userID: string }): Promise<any> {
    const { isValid, error } = CategoryValidator.validateDeletion({
      categoryID,
      boardID,
      userID,
    })

    if (!isValid) {
      throw new Error(`Invalid data ${error}`)
    }

    try {
      await BoardService.doesBoardHaveUser({ boardID, userID })

      await CategoryModel.findOneAndDelete({
        _id: categoryID,
        boardID,
      })

      return 'All good !'
    } catch (error) {
      throw new Error('You cant delete the category')
    }
  }

  public async create({
    title,
    boardID,
  }: {
    title: string
    boardID: string
  }): Promise<any> {
    const { isValid, data } = CategoryValidator.validateCreation({
      title,
      boardID,
    })

    if (!isValid) {
      throw new Error('Invalid data')
    }

    const board = await BoardModel.findOne({
      _id: boardID,
    })

    if (!board) {
      throw new Error('Board not found')
    }

    try {
      const board = await CategoryModel.create({
        title: data.title,
        boardID: data.boardID,
      })

      return board
    } catch (error) {
      throw new Error('An error occured while trying to add the user')
    }
  }

  public async update({
    categoryID,
    data: CategoryData,
    userID,
    boardID,
  }: CategoryUpdate & { userID: string }) {
    const { isValid, data } = CategoryValidator.validateUpdate({
      data: CategoryData,
      categoryID,
      boardID,
    })

    if (!isValid) {
      throw new Error('Invalid data')
    }

    try {
      await boardService.doesBoardHaveUser({
        boardID,
        userID,
      })

      const updatedCategory = CategoryModel.findOneAndUpdate({
        _id: categoryID,
        title: data.data.title,
      })

      return updatedCategory
    } catch (error) {
      throw new Error('Cant update the category')
    }
  }
}

export default new CategoryService()
