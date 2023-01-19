import { Request, Response, Router } from 'express'
import { HTTPCode } from '../types/http'
import UserValidator from '../user/user.validator'
import { logger } from '../utils/logger'
import AuthService from './auth.service'

const R = Router()

R.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  try {
    await AuthService.createUser({
      username,
      email,
      password,
    })

    res.status(HTTPCode.CREATED).json({
      ok: true,
    })
  } catch (error) {
    logger.error(`couldn't create user ${error}`)
    return res.status(HTTPCode.BAD_REQUEST).json({
      ok: false,
      message: error,
    })
  }
})

R.get('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body

  const isDataValid = UserValidator.validateLogin({
    email,
    password,
  })

  if (!isDataValid.isValid) {
    return res.status(HTTPCode.BAD_REQUEST).json({
      ok: false,
      message: isDataValid.error?.message,
    })
  }

  try {
    const { data, status } = await AuthService.connectUser({
      email,
      password,
    })

    res
      .cookie(process.env.AUTH_COOKIE_NAME as string, data?.JWT, {
        httpOnly: true,
        // sameSite: true,
        // secure: true,
        maxAge: data?.MAX_AGE,
      })
      .status(status)
      .json({
        ok: true,
      })
  } catch (error: any) {
    res.status(error.status).json({
      ok: false,
      message: error.message,
    })
  }
})

export default R
