import React from 'react'
import { VscBell } from 'react-icons/vsc'
import AsideItem from './components/AsideItem'

const LeftNavBar = () => {
  return (
    <aside className="left__aside">
      <header className="aside__header">
        <div className="board__interaction">
          <div className="board__interaction__left">
            <img
              src="https://laviedesreines.com/wp-content/uploads/2022/02/Comment-devenir-une-personne-solaire-pour-obtenir-tout-ce-que-vous-voulez-720x540.jpg"
              alt=""
            />
            <div className="board__interaction__data">
              <h2>Apocalypse</h2>
              <p>Lorem, ipsum.</p>
            </div>
          </div>

          <div className="board__interaction__right">
            <VscBell />
          </div>
        </div>
      </header>

      <div className="aside__items">
        <AsideItem />
        <AsideItem />
        <AsideItem />
      </div>
    </aside>
  )
}

export default LeftNavBar
