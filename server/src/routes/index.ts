import { Router } from 'express'
import UserRoutes from '../user/user.routes'
import AuthRoutes from '../auth/auth.routes'
import BoardRoutes from '../board/board.routes'
import authService from '../auth/auth.service'

const R = Router()

R.use('/me', authService.validateToken, UserRoutes)
R.use('/board', authService.validateToken, BoardRoutes)
R.use('/auth', AuthRoutes)

export default R
