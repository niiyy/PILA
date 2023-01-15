import J from 'joi'

export const boardSchema = J.object({
  title: J.string().min(2).max(40).required().trim(),
})
