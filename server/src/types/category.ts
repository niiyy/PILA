import { Card } from './card'

export interface Category {
  title: string
  cards: Card[]
}

export type CategoryCreation = Pick<Category, 'title'>
