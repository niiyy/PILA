import { IModalComponents } from '../components/modal/Modal'

export interface IModalState {
  open: boolean
  data: IModalStateData
}

export interface IModalStateData {
  componentToLoad: IModalComponents
  title: string
}
