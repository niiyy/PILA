import { FiChevronDown } from 'react-icons/fi'
import AvatarPlaceHolder from '../../assets/misc/avatar.png'
import AsideItem from './components/AsideItem'

const LeftNavBar = () => {
  return (
    <aside className="left__aside">
      <header className="aside__header">
        <div className="board__interaction">
          <div className="interaction__left">
            <img src={AvatarPlaceHolder} alt="board-img" />
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
        <AsideItem label="Dashboard" active />
      </div>
    </aside>
  )
}

export default LeftNavBar
