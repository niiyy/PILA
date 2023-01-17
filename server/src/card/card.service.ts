import boardService from '../board/board.service'
import { Card, CardCreation } from '../types/card'
import CardValidator from './card.validator'
import CardModel from './card.model'

class CardService {
  constructor() {}

  public async create({
    content,
    chips,
    categoryID,
    userID,
    boardID,
  }: CardCreation & { userID: string }) {
    const { isValid, data, error } = CardValidator.validateCreation({
      content,
      chips,
      categoryID,
      boardID,
    })

    if (!isValid) {
      throw new Error(error?.message)
    }

    try {
      await boardService.doesBoardHaveUser({
        userID,
        boardID,
      })

      const card = await CardModel.create({
        content: data.content,
        categoryID,
        chips: data.chips,
      })

      return card
    } catch (error) {
      throw new Error(`Cant create the card`)
    }
  }
}

export default new CardService()
