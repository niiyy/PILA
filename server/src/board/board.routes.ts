import { NextFunction, Request, Response, Router } from 'express'
import { HTTPCode } from '../types/http'
import { logger } from '../utils/logger'
import boardService from './board.service'

const R = Router()

R.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.body
  const { userID } = res.locals

  console.log(_id)

  try {
    const board = await boardService.get({ _id, userID })
  } catch (error) {
    logger.error(`couldn't find the user ${error}`)
    return res.status(HTTPCode.NOT_FOUND).json({
      ok: false,
      message: error,
    })
  }
})

R.post('/create', (req: Request, res: Response, next: NextFunction) => {})

R.put('/update', (req: Request, res: Response, next: NextFunction) => {})

export default R
