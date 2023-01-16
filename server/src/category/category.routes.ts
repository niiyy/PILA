import { NextFunction, Request, Response, Router } from 'express'
import { HTTPCode } from '../types/http'
import categoryService from './category.service'

const R = Router()

R.post('/', async (req: Request, res: Response) => {
  const { title, boardID } = req.body

  try {
    const category = await categoryService.create({ title, boardID })

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

export default R
