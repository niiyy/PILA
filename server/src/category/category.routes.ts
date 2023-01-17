import { NextFunction, Request, Response, Router } from 'express'
import { logger } from '../utils/logger'
import { HTTPCode } from '../types/http'
import CategoryService from './category.service'

const R = Router()

R.post('/', async (req: Request, res: Response) => {
  const { title, boardID } = req.body

  try {
    const category = await CategoryService.create({ title, boardID })

    res.status(HTTPCode.CREATED).json({
      ok: true,
      data: category,
    })
  } catch (error) {
    res.status(HTTPCode.BAD_REQUEST).json({
      ok: false,
      message: 'Cant create a category !',
    })
  }
})

R.delete('/', async (req: Request, res: Response) => {
  const { categoryID, boardID } = req.body
  const { userID } = res.locals

  try {
    const category = await CategoryService.delete({
      categoryID,
      boardID,
      userID,
    })

    res.status(HTTPCode.CREATED).json({
      ok: true,
      data: category,
    })
  } catch (error) {
    logger.error(error)
    res.status(HTTPCode.BAD_REQUEST).json({
      ok: false,
      message: 'Cant delete the category category !',
    })
  }
})

export default R
