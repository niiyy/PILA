import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Board from './components/pages/Board'
import Boards from './components/pages/Boards'
import Home from './components/pages/Home'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/board/:id" element={<Board />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
