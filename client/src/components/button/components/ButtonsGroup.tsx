import { ButtonsGroup as ButtonsGroupType } from '../../../types/button'
import Button from '../Button'

const ButtonsGroup = ({ items }: ButtonsGroupType) => {
  return (
    <div className="buttons__wrapper">
      {items.map((button) => (
        <Button
          {...button}
          ref={button.ref}
          label={button.label}
          colorType={button.colorType}
        />
      ))}
    </div>
  )
}

export default ButtonsGroup
