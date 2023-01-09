import { Request, Response, Router } from 'express'

const R = Router()

R.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello world from /me')
})

R.get('/update', (req: Request, res: Response) => {
  res.status(200).send('Hello world from /update')
})

export default R
