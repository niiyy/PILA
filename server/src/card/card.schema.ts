import J from 'joi'

export const cardSchema = J.object({
  title: J.string().min(1).max(40).required().trim(),
  description: J.string().min(1).max(300).trim(),
  chips: J.array(),
})
