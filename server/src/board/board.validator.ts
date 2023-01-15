import { ValidationError } from 'joi'
import { BoardCreation } from 'types/board'
import { boardSchema } from './board.schemas'

class BoardValidator {
  constructor() {}

  public validateCreation(board: BoardCreation): {
    isValid: boolean
    error: ValidationError | undefined
  } {
    const isValid = boardSchema.validate(board)

    return { isValid: isValid.error ? false : true, error: isValid.error }
  }
}

export default new BoardValidator()
