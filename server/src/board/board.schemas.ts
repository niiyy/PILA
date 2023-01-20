import J from 'joi'

export const boardCreationSchema = J.object({
  title: J.string().min(2).max(40).required().trim(),
})

export const boardUpdateSchema = J.object({
  boardID: J.string().required(),
  data: J.object({
    title: J.string().min(2).max(40).required().trim(),
  }),
})
