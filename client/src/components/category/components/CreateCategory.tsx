import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineAddBox } from 'react-icons/md'
import { useModalService } from '../../modal/hooks/useModalService'

const CreateCategory = () => {
  const { setModal } = useModalService()

  const handleCreateCategory = () => {
    setModal({
      data: {
        componentToLoad: 'CreateCategoryContent',
        title: 'Création de catégorie',
      },
      open: true,
    })
  }

  return (
    <div onClick={handleCreateCategory} className="board__category__create">
      <AiOutlinePlus />
    </div>
  )
}

export default CreateCategory
