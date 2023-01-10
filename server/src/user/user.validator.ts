import { User, UserLogin, UserRegister } from 'types/user'
import J from 'joi'
import { LoginSchema, RegisterSchema } from './user.schemas'
import { NextFunction, Request, Response } from 'express'

class _UserValidator {
  constructor() {}

  public validateRegister(user: UserRegister) {
    const isValid = RegisterSchema.validate(user)

    return { isValid: isValid.error ? true : false, error: isValid.error }
  }

  public validateLogin(user: UserLogin) {
    const isValid = LoginSchema.validate(user)

    return { isValid: isValid.error ? true : false, error: isValid.error }
  }
}

const UserValidator = new _UserValidator()
export default UserValidator
