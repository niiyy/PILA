import { compareSync, genSalt, hash } from 'bcrypt'
import { UserRegister } from 'types/user'

class PasswordService {
  constructor() {}

  static async crypte(user: any) {
    const salt = await genSalt()
    const hashedPassword = await hash(user.password, salt)

    user.password = hashedPassword

    return user
  }

  static async comparePasswords(password: string, hashedPassword: string) {
    return compareSync(password, hashedPassword)
  }
}

export default PasswordService
