import React, { ForwardedRef, forwardRef } from 'react'
import { Button as ButtonType } from '../../types/button'

const Button = forwardRef(
  (props: ButtonType, ref: ForwardedRef<HTMLButtonElement>) => {
    const { colorType, label, ...rest } = props

    return (
      <button {...rest} ref={ref} className={`btn ${colorType}`}>
        {label}
      </button>
    )
  }
)

export default Button
