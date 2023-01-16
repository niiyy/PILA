import { ValidationError, ValidationResult } from 'joi'
import { BoardCreation } from 'types/board'
import { CategoryCreation } from 'types/category'
import { Validation } from 'types/misc'
import { categoryCreationSchema } from './category.schemas'

class CategoryValidator {
  constructor() {}

  public validateCreation(
    category: CategoryCreation & { boardID: string }
  ): Validation<CategoryCreation & { boardID: string }> {
    const isValid = categoryCreationSchema.validate(category)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }
}

export default new CategoryValidator()
