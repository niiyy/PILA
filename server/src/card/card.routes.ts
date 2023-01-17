import { NextFunction, Request, Response, Router } from 'express'
import { HTTPCode } from '../types/http'
import cardService from './card.service'

const R = Router()

R.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { userID } = res.locals
  const { content, chips, categoryID, boardID } = req.body

  try {
    const card = await cardService.create({
      content,
      chips,
      categoryID,
      userID,
      boardID,
    })

    res.status(HTTPCode.CREATED).json({
      ok: true,
      data: card,
    })
  } catch (error) {
    console.log(error)
    res.status(HTTPCode.BAD_REQUEST).send({
      ok: false,
      message: 'Cant create a card',
    })
  }
})

export default R
