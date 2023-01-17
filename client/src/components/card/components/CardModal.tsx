import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import Button from '../../button/Button'

const CradModal = () => {
  return (
    <div className="modal__container">
      <section className="card__modal__container">
        <header className="card__modal__header">
          <div className="icon__wrapper">
            <IoCloseOutline />
          </div>
        </header>

        <div className="body__container">
          <div className="content__wrapper">
            <textarea></textarea>
          </div>

          <footer className="card__modal__footer">
            <Button colorType="danger" label="Supprimer" />
          </footer>
        </div>
      </section>
    </div>
  )
}

export default CradModal
