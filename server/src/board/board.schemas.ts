import J from 'joi'

export const boardCreationSchema = J.object({
  title: J.string().min(2).max(40).required().trim(),
})
