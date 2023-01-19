export interface User {
  email: string
  password: string
  username: string
  boards: string[]
}

export interface UserRegister
  extends Pick<User, 'email' | 'password' | 'username'> {}

export interface UserLogin extends Pick<User, 'email' | 'password'> {}
