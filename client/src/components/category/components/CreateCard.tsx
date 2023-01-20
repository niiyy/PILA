import { MdOutlineAddBox } from 'react-icons/md'
import { useModalService } from '../../modal/hooks/useModalService'

const CreateCard = () => {
  const { setModal } = useModalService()

  const handleCreateCard = () => {
    setModal({
      data: {
        componentToLoad: 'CreateCardContent',
        title: 'Création de carte',
      },
      open: true,
    })
  }

  return (
    <div onClick={handleCreateCard} className="category__create__card">
      <MdOutlineAddBox />
    </div>
  )
}

export default CreateCard
