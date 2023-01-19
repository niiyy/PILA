import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

const CardExample = () => {
  return (
    <div className="card__example">
      <header className="card__header">
        <div className="chips__wrapper">
          <div className="chips yellow">Idée</div>
          <div className="chips pink">Front</div>
        </div>
      </header>

      <section className="card__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          architecto recusandae natus similique inventore repellendus earum unde
          perspiciatis facere autem odio quisquam accusamus veniam ex neque,
          deleniti impedit rerum laboriosam rem fugit veritatis optio
          exercitationem molestiae. Quae fugiat pariatur voluptas.
        </p>
      </section>

      <footer>
        <div className="checked__wrapper">
          <AiOutlineCheck />
        </div>
      </footer>
    </div>
  )
}

export default CardExample
