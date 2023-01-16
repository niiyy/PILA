import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application as ApplicationType } from 'express'
import Routes from '../routes'
import { customHeaders } from '../utils/custom.headers'
import { logger } from '../utils/logger'

const app: ApplicationType = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
)

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(customHeaders)

app.use('/api/v1', Routes)

app.listen(process.env.PORT, () => {
  logger.info(`API STARTED AT PORT ${process.env.PORT}`)
})

export default app
