import boardService from '../board/board.service'
import { Card, CardCreation, CardDeletion, CardUpdate } from '../types/card'
import CardValidator from './card.validator'
import CardModel from './card.model'
import cardModel from './card.model'

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

  public async update({
    cardID,
    boardID,
    data: CardData,
    userID,
  }: CardUpdate & { userID: string }) {
    const { isValid, data, error } = CardValidator.validateUpdate({
      cardID,
      boardID,
      data: CardData,
    })

    if (!isValid) {
      throw new Error('Invalid data')
    }

    try {
      await boardService.doesBoardHaveUser({
        boardID,
        userID,
      })

      const updatedCard = await cardModel.findOneAndUpdate(
        {
          _id: cardID,
        },
        {
          chips: data.data.chips,
          content: data.data.content,
        }
      )
    } catch (error) {
      throw new Error('Cant update the card')
    }
  }

  public async delete({
    cardID,
    categoryID,
    boardID,
    userID,
  }: CardDeletion & { userID: string }) {
    const { isValid, data, error } = CardValidator.validateDeletion({
      categoryID,
      boardID,
      cardID,
    })

    if (!isValid) {
      throw new Error(error?.message)
    }

    try {
      await boardService.doesBoardHaveUser({
        boardID,
        userID,
      })

      await cardModel.findOneAndDelete({
        _id: cardID,
        categoryID,
      })
    } catch (error) {
      throw new Error('Cant delete this !')
    }
  }
}

export default new CardService()
