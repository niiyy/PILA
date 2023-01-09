import React from 'react'
import LeftNavBar from '../leftNavBar/LeftNavBar'

const Board = () => {
  return (
    <article className="board__container">
      <LeftNavBar />

      <div className="board__content__container">
        <header className="board__header"></header>

        <div className="board__cards__container"></div>
      </div>
    </article>
  )
}

export default Board
