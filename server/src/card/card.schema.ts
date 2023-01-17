import J from 'joi'

export const cardCreationSchema = J.object({
  content: J.string().min(1).max(300).trim().required(),
  chips: J.array().default([]),
  categoryID: J.string().required(),
  boardID: J.string().required(),
})
