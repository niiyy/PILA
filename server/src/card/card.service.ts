import { Card } from 'types/card'
import cardValidator from './card.validator'

class CardService {
  constructor() {}

  public async create({
    title,
    description,
    chips,
    userID,
  }: Card & { userID: string }) {
    const { isValid, data } = cardValidator.validateCreation({
      title,
      description,
      chips,
    })

    if (!isValid) {
      throw new Error('Invalid data')
    }

    try {
    } catch (error) {
      throw new Error('Cant create the card')
    }
  }
}

export default new CardService()
