import { Types } from 'mongoose'
import { Category } from './category'

export interface Board {
  title: string
  author: Types.ObjectId
  categorys: Category[]
}

export interface BoardCreation extends Pick<Board, 'title'> {}

export interface BoardUpdate {
  boardID: string
  data: {
    title: string
  }
}
