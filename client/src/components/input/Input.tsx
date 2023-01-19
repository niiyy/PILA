import React, {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: JSX.Element
  label?: string
}

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { Icon, className, id, label, ...rest } = props

    return (
      <div className="input__wrapper">
        {label && <label htmlFor="input">{label}</label>}
        <div className="body">
          <input
            spellCheck="false"
            id={`input ${id}`}
            className={`${className}`}
            ref={ref}
            {...rest}
          />
          {Icon && Icon}
        </div>
      </div>
    )
  }
)

export default Input
