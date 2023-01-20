import { useModalState } from '../../../recoil/atoms/modal'
import { IModalState, IModalStateData } from '../../../types/modal'

export const useModalService = () => {
  const [modal, setModal] = useModalState()

  const setModalOpen = (value: boolean) => {
    setModal({
      ...modal,
      open: value,
    })
  }

  const setModalData = (data: IModalStateData) => {
    setModal({
      ...modal,
      data: data,
    })
  }

  return { setModal, setModalOpen, setModalData, open: modal.open, modal }
}
