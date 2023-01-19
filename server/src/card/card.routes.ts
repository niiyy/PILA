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

R.put('/', async (req: Request, res: Response, next: NextFunction) => {
  const { userID } = res.locals
  const { boardID, cardID, data } = req.body

  try {
    await cardService.update({
      userID,
      boardID,
      cardID,
      data,
    })

    res.status(HTTPCode.ACCEPTED).json({
      ok: true,
    })
  } catch (error) {
    console.log(error)
    res.status(HTTPCode.BAD_REQUEST).send({
      ok: false,
      message: 'Cant delete a card',
    })
  }
})

R.delete('/', async (req: Request, res: Response, next: NextFunction) => {
  const { userID } = res.locals
  const { categoryID, boardID, cardID } = req.body

  try {
    await cardService.delete({
      categoryID,
      userID,
      boardID,
      cardID,
    })

    res.status(HTTPCode.ACCEPTED).json({
      ok: true,
    })
  } catch (error) {
    console.log(error)
    res.status(HTTPCode.BAD_REQUEST).send({
      ok: false,
      message: 'Cant delete a card',
    })
  }
})

export default R
