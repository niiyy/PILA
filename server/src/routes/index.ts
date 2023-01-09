import { Router } from 'express'
import UserRoutes from '../user/user.routes'
import AuthRoutes from '../auth/auth.routes'

const R = Router()

R.use('/me', UserRoutes)
R.use('/auth', AuthRoutes)

export default R
