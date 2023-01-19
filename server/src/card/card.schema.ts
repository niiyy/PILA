import J from 'joi'
import { Card, CardUpdate } from '../types/card'

export const cardCreationSchema = J.object({
  content: J.string().min(1).max(300).trim().required(),
  chips: J.array().default([]),
  categoryID: J.string().required(),
  boardID: J.string().required(),
})

export const cardDeletionSchema = J.object({
  cardID: J.string().required(),
  categoryID: J.string().required(),
  boardID: J.string().required(),
})

export const cardUpdateSchema = J.object({
  cardID: J.string().required(),
  boardID: J.string().required(),
  data: J.object({
    chips: J.array().default([]).required(),
    content: J.string().min(1).max(300).trim().required(),
  }).required(),
})
