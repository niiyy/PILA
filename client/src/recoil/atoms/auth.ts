import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { ATOMS_KEYS } from '..'

export const authState = atom({
  key: ATOMS_KEYS.AUTH,
  default: {
    isLoggedIn: false,
    userID: null,
  },
})

export const useAuthValue = () => useRecoilValue(authState)
export const useSetAuth = () => useSetRecoilState(authState)
export const useAuthState = () => useRecoilState(authState)
