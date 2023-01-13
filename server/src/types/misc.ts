import { HTTPCodesTypes } from './http'

export interface PromiseResponse<T = any> {
  message?: string
  status: HTTPCodesTypes
  data?: T
}
