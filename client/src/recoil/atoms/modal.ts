import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { ATOMS_KEYS } from '..'
import { IModalState, IModalStateData } from '../../types/modal'

export const modalState = atom({
  key: ATOMS_KEYS.MODAL,
  default: {
    open: false,
    data: {
      componentToLoad: 'Error',
      title: 'Erreur',
    },
  } as IModalState,
})

export const useModalValue = () => useRecoilValue(modalState)
export const useSetModal = () => useSetRecoilState(modalState)
export const useModalState = () => useRecoilState(modalState)
