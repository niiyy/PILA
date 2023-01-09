import J from 'joi'

export const RegisterSchema = J.object({
  email: J.string().email().required().trim().lowercase(),
  password: J.string().min(8).max(85).required(),
  username: J.string().min(3).max(40).required().trim(),
  passwordConfirmation: J.any().valid(J.ref('password')).required(),
})