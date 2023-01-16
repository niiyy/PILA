import BoardModel from '../board/board.model'
import CategoryModel from './category.model'
import CategoryValidator from './category.validator'

class CategoryService {
  constructor() {}

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
}

export default new CategoryService()
