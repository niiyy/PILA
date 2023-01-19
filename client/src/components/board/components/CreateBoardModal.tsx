import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import Button from '../../button/Button'
import ButtonsGroup from '../../button/components/ButtonsGroup'
import Input from '../../input/Input'

import { MdTitle } from 'react-icons/md'

const CreateBoardModal = () => {
  return (
    <section className="create__board__modal__container">
      <div className="board__modal">
        <header className="board__modal__header">
          <div className="icon__wrapper">
            <IoCloseOutline />
          </div>
        </header>

        <div className="body__container">
          <div className="content__wrapper">
            <Input label="Titre" placeholder="Titre" Icon={<MdTitle />} />
          </div>
          <footer className="card__modal__footer">
            <ButtonsGroup
              items={[
                {
                  colorType: 'primary',
                  label: 'Ajouter',
                },
              ]}
            />
          </footer>
        </div>
      </div>
    </section>
  )
}

export default CreateBoardModal
