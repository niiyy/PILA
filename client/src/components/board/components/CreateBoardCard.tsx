import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { useModalService } from '../../modal/hooks/useModalService'

const CreateBoardCard = () => {
  const { setModal, modal } = useModalService()

  const handleCardClicked = () => {
    setModal({
      data: {
        componentToLoad: 'CreateBoardContent',
        title: 'Création de tableau',
      },
      open: true,
    })
  }

  return (
    <article onClick={handleCardClicked} className="board__card__item create">
      <AiOutlineAppstoreAdd />
    </article>
  )
}

export default CreateBoardCard
