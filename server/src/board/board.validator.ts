import { BoardCreation, BoardUpdate } from 'types/board'
import { Validation } from 'types/misc'
import { boardCreationSchema, boardUpdateSchema } from './board.schemas'

class BoardValidator {
  constructor() {}

  public validateCreation(board: BoardCreation): Validation<BoardCreation> {
    const isValid = boardCreationSchema.validate(board)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }

  public validateUpdate(board: BoardUpdate): Validation<BoardUpdate> {
    const isValid = boardUpdateSchema.validate(board)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }
}

export default new BoardValidator()
