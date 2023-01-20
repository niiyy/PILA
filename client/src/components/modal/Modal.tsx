import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { IModalStateData } from '../../types/modal'
import CreateBoardContent from './components/CreateBoardContent'
import CreateCardContent from './components/CreateCardContent'
import CreateCategoryContent from './components/CreateCategoryContent'
import Error from './components/Error'
import { useModalService } from './hooks/useModalService'

const ModalComponents = {
  CreateBoardContent: <CreateBoardContent />,
  CreateCardContent: <CreateCardContent />,
  CreateCategoryContent: <CreateCategoryContent />,
  Error: <Error />,
}

export type IModalComponents = keyof typeof ModalComponents

const Modal = ({ title, componentToLoad }: IModalStateData) => {
  const { setModalOpen } = useModalService()

  const handleCloseModal = () => setModalOpen(false)

  return (
    <div className="modal__container">
      <div className="modal">
        <header className="modal__header">
          <h2>{title}</h2>
          <div onClick={handleCloseModal} className="icon__wrapper">
            <IoCloseOutline />
          </div>
        </header>

        <section className="modal__body">
          {ModalComponents[componentToLoad]}
        </section>
      </div>
    </div>
  )
}

export default Modal
