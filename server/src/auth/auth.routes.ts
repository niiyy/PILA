import { Request, Response, Router } from 'express'
import UserValidator from '../user/user.validator'

const R = Router()

R.post(
  '/register',
  UserValidator.validateRegister,
  (req: Request, res: Response) => {
    res.status(200).send('All good !')
  }
)

R.get('/login', (req: Request, res: Response) => {
  return ''
})

export default R
