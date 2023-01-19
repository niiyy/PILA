import { ValidationError } from 'joi'
import { BoardCreation } from '../types/board'
import { Card, CardCreation, CardDeletion, CardUpdate } from '../types/card'
import { Validation } from '../types/misc'
import {
  cardCreationSchema,
  cardDeletionSchema,
  cardUpdateSchema,
} from './card.schema'

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

  public validateDeletion(card: CardDeletion): Validation<CardDeletion> {
    const isValid = cardDeletionSchema.validate(card)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }

  public validateUpdate(card: CardUpdate): Validation<CardUpdate> {
    const isValid = cardUpdateSchema.validate(card)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }
}

export default new CardValidator()
