import { Router } from 'express'
import AuthRoutes from '../auth/auth.routes'
import authService from '../auth/auth.service'
import BoardRoutes from '../board/board.routes'
import CategoryRoutes from '../category/category.routes'
import UserRoutes from '../user/user.routes'
import CardRoutes from '../card/card.routes'

const R = Router()

R.use('/me', authService.validateToken, UserRoutes)
R.use('/card', authService.validateToken, CardRoutes)
R.use('/board', authService.validateToken, BoardRoutes)
R.use('/category', authService.validateToken, CategoryRoutes)
R.use('/auth', AuthRoutes)

export default R
