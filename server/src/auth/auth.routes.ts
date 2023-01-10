import { HttpStatusCode } from '../types/http'
import { Request, Response, Router } from 'express'
import { isValidObjectId } from 'mongoose'
import User from '../user/user.model'
import UserValidator from '../user/user.validator'
import { logger } from '../utils/logger'

const R = Router()

R.post('/register', async (req: Request, res: Response) => {
  const { username, email, password, passwordConfirmation } = req.body

  const isDataValid = UserValidator.validateRegister({
    username,
    email,
    password,
    passwordConfirmation,
  })

  if (!isDataValid) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      ok: false,
      error: isDataValid,
    })
  }

  try {
    const user = await User.create({
      username,
      email,
      password,
    })

    res.status(HttpStatusCode.CREATED).json({
      ok: true,
    })
  } catch (error) {
    logger.error(`couldn't create user ${error}`)
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      ok: false,
      error: error,
    })
  }
})

R.get('/login', (req: Request, res: Response) => {
  const { email, password } = req.body

  const isDataValid = UserValidator.validateLogin({
    email,
    password,
  })

  if (!isDataValid) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      ok: false,
      error: isDataValid,
    })
  }
})

export default R
