import { NextFunction, Request, Response, Router } from 'express'
import { HTTPCode } from 'types/http'
import cardService from './card.service'

const R = Router()

R.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { userID } = res.locals
  const { title, description, chips } = req.body
  try {
    cardService.create({ title, description, chips, userID })
  } catch (error) {
    res.status(HTTPCode.BAD_REQUEST).send({
      ok: false,
      message: 'Cant create a card',
    })
  }
})

export default R
