import React from 'react'
import { VscBell } from 'react-icons/vsc'
import AsideItem from './components/AsideItem'
import { FiChevronDown } from 'react-icons/fi'

const LeftNavBar = () => {
  return (
    <aside className="left__aside">
      <header className="aside__header">
        <div className="board__interaction">
          <div className="interaction__left">
            <img
              src="https://p.favim.com/orig/2018/11/22/girl-profile-picture-pfp-profile-picture-Favim.com-6592935.jpg"
              alt=""
            />
            <div className="interaction__data">
              <h2>Dashboard</h2>
              <p>Apocalypse.</p>
            </div>
          </div>

          <div className="interaction__right">
            <FiChevronDown />
          </div>
        </div>
      </header>

      <div className="aside__items">
        <AsideItem active />
        <AsideItem />
        <AsideItem />
      </div>
    </aside>
  )
}

export default LeftNavBar
