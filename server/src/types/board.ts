export interface Board {
  title: string
  author: any
  categorys: Category[]
}

export type BoardCreation = Pick<Board, 'title'>

export interface Category {
  title: string
  cards: Card[]
}

export interface Card {
  title: string
  description: string
  chips: string[]
}
