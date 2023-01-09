import express, { Application as ApplicationType } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import Routes from '../routes'

class App {
  APP: ApplicationType | null
  APP_PORT: number

  constructor() {
    this.APP_PORT = (process.env.PORT as unknown as number) || 8080
    this.APP = null

    this.init()
  }

  protected init() {
    this.APP = express()

    this.APP.use(
      cors({
        origin: process.env.CORS_ORIGIN,
      })
    )

    this.APP.use(cookieParser())
    this.APP.use(express.json())
    this.APP.use(express.urlencoded({ extended: true }))

    this.APP.use('/', Routes)

    this.APP.listen(this.APP_PORT, () => {
      console.log(`API STARTED AT PORT ${this.APP_PORT}`)
    })
  }
}

const Application = new App()
export default Application
