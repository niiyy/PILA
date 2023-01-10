import React from 'react'
import PilaBlack from '../../assets/pila/pila-black.svg'
import { VscBell } from 'react-icons/vsc'
import { RiSettings4Line } from 'react-icons/ri'

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

        <RiSettings4Line />

        <div className="user__image__wrapper">
          <img
            src="https://p.favim.com/orig/2018/11/22/girl-profile-picture-pfp-profile-picture-Favim.com-6592935.jpg"
            alt=""
          />
        </div>
      </div>
    </header>
  )
}

export default Header
