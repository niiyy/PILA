import React from 'react'
import { IoCloseOutline, IoCloudyNight } from 'react-icons/io5'
import Button from '../../button/Button'
import ButtonsGroup from '../../button/components/ButtonsGroup'
import TextArea from '../../input/TextArea'

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
            <TextArea
              placeholder="Contenu"
              Icon={<IoCloudyNight />}
              label="Contenu"
            />
          </div>

          <footer className="card__modal__footer">
            <Button colorType="danger" label="Supprimer" />
            <Button colorType="primary" label="Mettre a jour" />
          </footer>
        </div>
      </section>
    </div>
  )
}

export default CradModal
