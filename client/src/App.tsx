import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Board from './components/pages/Board'
import Boards from './components/pages/Boards'
import Home from './components/pages/Home'
import Auth from './components/pages/Auth'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { authState } from './recoil/atoms/auth'
import AuthAPI from './api/board/AuthAPI'
import { modalState } from './recoil/atoms/modal'
import Modal from './components/modal/Modal'

const App = () => {
  const { open, data } = useRecoilValue(modalState)

  return (
    <>
      {open && (
        <Modal componentToLoad={data.componentToLoad} title={data.title} />
      )}
      <Header />
      <Routes>
        <Route path="/board/:id" element={<Board />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
