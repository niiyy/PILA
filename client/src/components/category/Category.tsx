import React from 'react'
import { CategoryProps } from '../../types/category'
import Card from '../card/Card'

const Category = ({ data }: CategoryProps) => {
  const { title, color } = data

  return (
    <div className="board__category">
      <header className="category__header">
        <div className="category__header__right">
          <div
            style={{
              backgroundColor: color,
            }}
            className="category__color"
          ></div>
          <h2>{title}</h2>
        </div>
      </header>

      <div className="category__content">
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Category
