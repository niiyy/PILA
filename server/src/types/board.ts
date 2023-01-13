export interface Board {
  title: string
  author: any
  categorys: Category[]
}

export interface Category {
  title: string
  cards: Card[]
}

export interface Card {
  title: string
  description: string
  chips: string[]
}
