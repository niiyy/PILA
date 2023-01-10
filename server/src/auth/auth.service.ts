import JWT from 'jsonwebtoken'
import { ObjectId } from 'mongoose'

export class AuthService {
  TOKEN_MAX_AGE: string | number
  constructor() {
    this.TOKEN_MAX_AGE = '4h'
  }

  public generateToken(_id: ObjectId) {
    return JWT.sign({ _id }, process.env.JWT_SECRET as string, {
      expiresIn: this.TOKEN_MAX_AGE,
    })
  }
}

export default new AuthService()
