export interface User {
  email: string
  password: string
  username: string
  boards: string[]
}

export type UserRegister = Pick<User, 'email' | 'password' | 'username'> & {
  passwordConfirmation: string
}

export type UserLogin = Pick<User, 'email' | 'password'>
