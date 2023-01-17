import { ValidationError } from 'joi'
import { BoardCreation } from '../types/board'
import { Card, CardCreation } from '../types/card'
import { Validation } from '../types/misc'
import { cardCreationSchema } from './card.schema'

class CardValidator {
  constructor() {}

  public validateCreation(card: CardCreation): Validation<CardCreation> {
    const isValid = cardCreationSchema.validate(card)

    console.log(isValid)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }
}

export default new CardValidator()
