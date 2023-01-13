import express, { Application as ApplicationType } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import Routes from '../routes'
import { passTokenToReq, customHeaders } from '../utils/custom.headers'

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
)

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(customHeaders)
app.use(passTokenToReq)

app.use('/api/v1', Routes)

app.listen(process.env.PORT, () => {
  console.log(`API STARTED AT PORT ${process.env.PORT}`)
})

export default app
