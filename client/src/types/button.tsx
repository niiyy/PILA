import { ButtonHTMLAttributes, Ref } from 'react'

export interface ButtonsGroup {
  items: Button[]
}

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  colorType: ButtonTypes
  ref?: Ref<HTMLButtonElement>
}

export type ButtonTypes = 'primary' | 'normal' | 'danger'
