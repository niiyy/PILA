import React from 'react'
import PilaBlack from '../../assets/pila/pila-black.svg'
import { VscBell } from 'react-icons/vsc'

const Header = () => {
  return (
    <header className="main__header">
      <div className="left__wrapper">
        <img src={PilaBlack} alt="logo" />
      </div>

      <div className="right__wrapper">
        <div className="notification__container">
          <VscBell />
        </div>

        <div className="user__image__wrapper">
          <img
            src="https://laviedesreines.com/wp-content/uploads/2022/02/Comment-devenir-une-personne-solaire-pour-obtenir-tout-ce-que-vous-voulez-720x540.jpg"
            alt=""
          />
        </div>
      </div>
    </header>
  )
}

export default Header
