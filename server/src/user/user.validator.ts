import { Validation } from 'types/misc'
import { UserLogin, UserRegister } from 'types/user'
import { LoginSchema, RegisterSchema } from './user.schemas'

class UserValidator {
  constructor() {}

  public validateRegister(user: UserRegister): Validation<UserRegister> {
    const isValid = RegisterSchema.validate(user)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }

  public validateLogin(user: UserLogin): Validation<UserLogin> {
    const isValid = LoginSchema.validate(user)

    return {
      isValid: isValid.error ? false : true,
      error: isValid.error,
      data: isValid.value,
    }
  }
}

export default new UserValidator()
