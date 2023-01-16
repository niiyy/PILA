import { NextFunction, Request, Response } from 'express'

export const customHeaders = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // ? This well prevent the attackers to know what engine our API is using
  res.setHeader('X-Powered-By', 'PILA')

  next()
}
