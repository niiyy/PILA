import LeftNavBar from '../leftNavBar/LeftNavBar'
import { VscBell, VscListFilter } from 'react-icons/vsc'
import { RiDashboardLine, RiMoreFill } from 'react-icons/ri'
import { RxDashboard } from 'react-icons/rx'
import { useDrag } from 'react-dnd'
import Card from '../card/Card'

const Board = () => {
  return (
    <article className="board__container">
      <LeftNavBar />

      <div className="board__content__container">
        <header className="board__header">
          <div className="board__header__left">
            <div className="icon__wrapper">
              <RiDashboardLine />
            </div>
            <h1>Apocalypse</h1>
          </div>

          <div className="board__header__right">
            <div className="board__header__right__orders">
              <div className="board__header__right__order board__header__right__order--active">
                <RxDashboard />
              </div>
              <div className="board__header__right__order">
                <VscListFilter />
              </div>
            </div>
          </div>
        </header>

        <div className="board__cards__container">
          <div className="board__category">
            <header className="board__category__header">
              <div className="board__category__header__right">
                <h2>Finished</h2>
              </div>
            </header>

            <div className="board__category__content">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Board
