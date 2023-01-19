export interface Card {
  content: string
  chips: string[]
}

export interface CardCreation extends Pick<Card, 'content' | 'chips'> {
  categoryID: string
  boardID: string
}

export interface CardDeletion {
  boardID: string
  categoryID: string
  cardID: string
}

export interface CardUpdate {
  boardID: string
  cardID: string
  data: Card
}
