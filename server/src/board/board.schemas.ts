import J from 'joi'

export const BoardSchema = J.object({
  title: J.string().min(3).max(40).required().trim(),
})
