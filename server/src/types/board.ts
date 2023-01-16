import { Types } from 'mongoose'
import { Category } from './category'

export interface Board {
  title: string
  author: Types.ObjectId
  categorys: Category[]
}

export type BoardCreation = Pick<Board, 'title'>
