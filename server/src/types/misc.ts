import { ValidationError } from 'joi'
import { HTTPCodesTypes } from './http'

export interface PromiseResponse<T = any> {
  message?: string
  status: HTTPCodesTypes
  data?: T
}

export interface Validation<T = any> {
  isValid: boolean
  error: ValidationError | undefined
  data: T
}
