import { User, UserRegister } from 'types/user'
import J from 'joi'
import { RegisterSchema } from './user.schemas'
import { NextFunction, Request, Response } from 'express'

class _UserValidator {
  constructor() {}

  public validateRegister(req: Request, res: Response, next: NextFunction) {
    const user = req.body

    const isValid = RegisterSchema.validate(user)

    console.log(isValid)

    !isValid.error && next()
  }
}

const UserValidator = new _UserValidator()
export default UserValidator
