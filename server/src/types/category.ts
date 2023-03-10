import { Card } from './card'

export interface Category {
  title: string
  cards: Card[]
}

export interface CategoryCreation extends Pick<Category, 'title'> {}

export interface CategoryDeletion {
  categoryID: string
  boardID: string
}

export interface CategoryUpdate {
  categoryID: string
  boardID: string
  data: {
    title: string
  }
}
