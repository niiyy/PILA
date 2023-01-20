import { IoCloudyNight } from 'react-icons/io5'
import Button from '../../button/Button'
import Input from '../../input/Input'

const CreateCategoryContent = () => {
  return (
    <>
      <div className="modal__content create__category__content">
        <Input placeholder="Titre" Icon={<IoCloudyNight />} label="Titre" />
      </div>

      <footer className="modal__footer create__category__footer">
        <Button colorType="primary" label="Ajouter" />
      </footer>
    </>
  )
}

export default CreateCategoryContent
