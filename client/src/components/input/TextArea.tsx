import React, {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from 'react'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  Icon?: JSX.Element
  label?: string
}

const TextArea = forwardRef(
  (props: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { Icon, className, id, label, ...rest } = props

    return (
      <div className="textarea__wrapper">
        {label && <label htmlFor="textarea">{label}</label>}
        <div className="textarea__body">
          <textarea
            spellCheck="false"
            id={`textarea ${id}`}
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

export default TextArea
