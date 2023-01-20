import { NextFunction, Request, Response, Router } from 'express'
import { HTTPCode } from '../types/http'
import { logger } from '../utils/logger'
import BoardService from './board.service'

const R = Router()

R.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { userID } = res.locals

  try {
    const board = await BoardService.get({ _id: id, userID })

    res.status(HTTPCode.ACCEPTED).json({
      ok: true,
      data: board,
    })
  } catch (error) {
    logger.error(`couldn't find the board ${error}`)

    res.status(HTTPCode.NOT_FOUND).json({
      ok: false,
      message: 'Board not found !',
    })
  }
})

R.post('/', async (req: Request, res: Response) => {
  const { title } = req.body
  const { userID } = res.locals

  try {
    const board = await BoardService.create({ title, userID })
    res.status(HTTPCode.CREATED).json({
      ok: true,
      data: board,
    })
  } catch (error) {
    logger.error(`couldn't create the board ${error}`)
    res.status(HTTPCode.BAD_REQUEST).json({
      ok: false,
      message: 'Cant create the board',
    })
  }
})

R.put('/', async (req: Request, res: Response) => {
  const { data, boardID } = req.body
  const { userID } = res.locals

  try {
    const board = await BoardService.update({ data, userID, boardID })

    res.status(HTTPCode.CREATED).json({
      ok: true,
      data: board,
    })
  } catch (error) {
    logger.error(`couldn't update the board ${error}`)
    res.status(HTTPCode.BAD_REQUEST).json({
      ok: false,
      message: 'Cant update the board',
    })
  }
})

R.delete('/', async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.body
  const { userID } = res.locals

  try {
    const board = await BoardService.delete({ _id, userID })
    res.status(HTTPCode.ACCEPTED).json({
      ok: true,
      message: 'Board deleted',
    })
  } catch (error) {
    logger.error(`couldn't delete the board ${error}`)
    res.status(HTTPCode.BAD_REQUEST).json({
      ok: false,
      message: 'Cant delete the board',
    })
  }
})

export default R
