import express, { Application as ApplicationType } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

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

    // this.APP.use(
    //     cors({
    //       origin: 'http://localhost:5173',
    //       methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //       credentials: true,
    //     })
    // )
    this.APP.use(cors())

    this.APP.use(cookieParser())
    this.APP.use(express.json())
    this.APP.use(express.urlencoded({ extended: true }))

    this.APP.listen(this.APP_PORT)
    console.log(`API STARTED AT PORT ${this.APP_PORT}`)
  }
}

const Application = new App()

export default Application
