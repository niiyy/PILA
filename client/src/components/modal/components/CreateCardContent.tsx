import React from 'react'
import { IoCloudyNight } from 'react-icons/io5'
import Button from '../../button/Button'
import ButtonsGroup from '../../button/components/ButtonsGroup'
import TextArea from '../../input/TextArea'

const CreateCardContent = () => {
  return (
    <>
      <div className="modal__content create__card__content">
        <TextArea
          placeholder="Contenu"
          Icon={<IoCloudyNight />}
          label="Contenu"
        />
      </div>

      <footer className="modal__footer create__card__footer">
        <Button colorType="primary" label="Ajouter" />
      </footer>
    </>
  )
}

export default CreateCardContent
