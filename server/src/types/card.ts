export interface Card {
  content: string
  chips: string[]
}

export interface CardCreation extends Pick<Card, 'content' | 'chips'> {
  categoryID: string
  boardID: string
}
