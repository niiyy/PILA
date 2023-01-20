import { useEffect } from 'react'
import { RiDashboardLine } from 'react-icons/ri'
import { RxDashboard } from 'react-icons/rx'
import { VscListFilter } from 'react-icons/vsc'
import Category from '../category/Category'
import CreateCategory from '../category/components/CreateCategory'
import LeftNavBar from '../leftNavBar/LeftNavBar'

const Board = () => {
  useEffect(() => {
    console.log('Refresh')
  })

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
          <Category data={{ color: 'lightblue', title: 'Idée' }} />
          <Category data={{ color: 'yellow', title: 'En cours' }} />
          <Category data={{ color: 'green', title: 'Fini' }} />
          <CreateCategory />
        </div>
      </div>
    </article>
  )
}

export default Board
