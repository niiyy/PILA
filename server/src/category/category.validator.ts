import { ValidationError, ValidationResult } from 'joi'
import { BoardCreation } from 'types/board'
import {
  CategoryCreation,
  CategoryDeletion,
  CategoryUpdate,
} from 'types/category'
import { Validation } from 'types/misc'
import {
  categoryCreationSchema,
  categoryDeletionSchema,
  categoryUpdateSchema,
} from './category.schemas'

class CategoryValidator {
  constructor() {}

  public validateDeletion(
    category: CategoryDeletion & { userID: string }
  ): Validation<CategoryDeletion & { userID: string }> {
    const isValid = categoryDeletionSchema.validate(category)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }

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

  public validateUpdate(category: CategoryUpdate): Validation<CategoryUpdate> {
    const isValid = categoryUpdateSchema.validate(category)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }
}

export default new CategoryValidator()
