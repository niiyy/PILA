import JWT from 'jsonwebtoken'
import { ObjectId, Schema } from 'mongoose'
import PasswordService from '../services/password.service'
import { UserLogin, UserRegister } from 'types/user'
import UserModel from '../user/user.model'
import { HTTPCode, HTTPCodesTypes } from '../types/http'
import { PromiseResponse } from 'types/misc'
import { NextFunction, Request, Response } from 'express'
import UserValidator from '../user/user.validator'

class AuthService {
  TOKEN_MAX_AGE: number
  constructor() {
    this.TOKEN_MAX_AGE = 3 * 24 * 60 * 60 * 500 // 1.5 day.
  }

  public generateToken({ _id }: { _id: any }) {
    return JWT.sign({ _id }, process.env.JWT_SECRET as string, {
      expiresIn: this.TOKEN_MAX_AGE,
    })
  }

  public validateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies[process.env.AUTH_COOKIE_NAME as string]

    if (!token) {
      return res.status(HTTPCode.UNAUTHORIZED).json({
        ok: false,
        message: 'u are trying to acces a protected resource !',
      })
    }

    JWT.verify(
      token,
      process.env.JWT_SECRET as string,
      (err: JWT.VerifyErrors | null, decodedToken: any) => {
        if (err) {
          return res.status(HTTPCode.UNAUTHORIZED).json({
            ok: false,
            message: 'u are trying to acces a protected resource !',
          })
        }

        res.locals.userID = decodedToken._id

        next()
      }
    )
  }

  public connectUser({
    email,
    password,
  }: UserLogin): Promise<PromiseResponse<{ JWT: string; MAX_AGE: number }>> {
    return new Promise(async (resolve, reject) => {
      const user = await UserModel.findOne({ email })

      if (!user) {
        return reject({
          message: 'user not found',
          status: HTTPCode.UNAUTHORIZED,
        })
      }

      const isPasswordMatching = await PasswordService.comparePasswords(
        password,
        user.password as string
      )

      if (!isPasswordMatching) {
        return reject({
          message: 'password not matching',
          status: HTTPCode.UNAUTHORIZED,
        })
      }

      const token = this.generateToken({ _id: user._id })

      resolve({
        data: { JWT: token, MAX_AGE: this.TOKEN_MAX_AGE },
        status: HTTPCode.OK,
      })
    })
  }

  public async createUser({ username, email, password }: UserRegister) {
    const { isValid, error, data } = UserValidator.validateRegister({
      username,
      email,
      password,
    })

    if (!isValid) {
      throw new Error('Invalid data')
    }

    try {
      const user = await UserModel.create({
        username: data.username,
        email: data.email,
        password: data.password,
      })

      return user
    } catch (error) {
      throw new Error('Error while creating user')
    }
  }
}

export default new AuthService()
