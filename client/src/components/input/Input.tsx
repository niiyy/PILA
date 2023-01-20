import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: JSX.Element
  label?: string
  onIconClick?: () => void
}

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { Icon, className, id, label, onIconClick, ...rest } = props

    return (
      <div className="input__wrapper">
        {label && <label htmlFor="input">{label}</label>}
        <div className="input__body">
          <input spellCheck="false" ref={ref} {...rest} />
          <div onClick={onIconClick} className="input__icon">
            {Icon && Icon}
          </div>
        </div>
      </div>
    )
  }
)

export default Input
