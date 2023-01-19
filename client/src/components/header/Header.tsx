import React from 'react'
import PillaWhite from '../../assets/pila/pila-white.svg'
import { VscBell } from 'react-icons/vsc'
import { RiSettings4Line } from 'react-icons/ri'
import AvatarPlaceHolder from '../../assets/misc/avatar.png'

const Header = () => {
  return (
    <header className="main__header">
      <div className="left__wrapper">
        <img src={PillaWhite} alt="logo" />
      </div>

      <div className="right__wrapper">
        {/* <div className="buttons__wrapper">
          <button className="btn primary">Se connecter</button>
          <button className="btn normal">S'inscrire</button>
        </div> */}
        <div className="notification__container">
          <VscBell />
        </div>

        <RiSettings4Line />

        <div className="user__image__wrapper">
          <img src={AvatarPlaceHolder} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
