import J from 'joi'

export const categoryCreationSchema = J.object({
  title: J.string().min(1).max(40).required().trim(),
  boardID: J.string().required().trim(),
})

export const categoryDeletionSchema = J.object({
  categoryID: J.string().required().trim(),
  boardID: J.string().required().trim(),
  userID: J.string().required().trim(),
})
