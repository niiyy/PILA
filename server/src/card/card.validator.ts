import { ValidationError } from 'joi'
import { BoardCreation } from 'types/board'
import { Card } from 'types/card'
import { Validation } from 'types/misc'
import { cardSchema } from './card.schema'

class CardValidator {
  constructor() {}

  public validateCreation(card: Card): Validation<Card> {
    const isValid = cardSchema.validate(card)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }
}

export default new CardValidator()
