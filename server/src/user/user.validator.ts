import { User, UserLogin, UserRegister } from 'types/user'
import { ValidationError } from 'joi'
import { LoginSchema, RegisterSchema } from './user.schemas'

class _UserValidator {
  constructor() {}

  public validateRegister(user: UserRegister): {
    isValid: boolean
    error: ValidationError | undefined
  } {
    const isValid = RegisterSchema.validate(user)

    return { isValid: isValid.error ? false : true, error: isValid.error }
  }

  public validateLogin(user: UserLogin): {
    isValid: boolean
    error: ValidationError | undefined
  } {
    const isValid = LoginSchema.validate(user)

    return { isValid: isValid.error ? false : true, error: isValid.error }
  }
}

const UserValidator = new _UserValidator()
export default UserValidator
