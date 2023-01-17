import React from 'react'

const Card = () => {
  return (
    <article className="board__card">
      <div className="board__card__chips__wrapper">
        <div className="card__chips">
          <span>High</span>
        </div>
        <div className="card__chips">
          <span>High</span>
        </div>
      </div>
      <div className="card__content">
        <h2 className="card__title">Inventaire</h2>
        <span className="card__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ex
          quaerat, voluptates, asperiores rerum consequuntur expedita nesciunt
          molestias cum alias labore facilis incidunt, adipisci nemo nostrum
          ratione provident dolorem modi itaque earum ullam animi dolorum illum?
          Labore similique veritatis eligendi!
        </span>

        <footer className="footer"></footer>
      </div>
    </article>
  )
}

export default Card
