import LeftNavBar from '../leftNavBar/LeftNavBar'
import { VscBell, VscListFilter } from 'react-icons/vsc'
import { RiDashboardLine, RiMoreFill } from 'react-icons/ri'
import { RxDashboard } from 'react-icons/rx'
import { useDrag } from 'react-dnd'

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
              <article className="board__card">
                <div className="board__card__chips__wrapper">
                  <div className="card__chips">
                    <span>High</span>
                  </div>
                  <div className="card__chips">
                    <span>High</span>
                  </div>
                </div>
                <div className="card__content">
                  <h2 className="card__title">Inventaire</h2>
                  <span className="card__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum ex quaerat, voluptates, asperiores rerum consequuntur
                    expedita nesciunt molestias cum alias labore facilis
                    incidunt, adipisci nemo nostrum ratione provident dolorem
                    modi itaque earum ullam animi dolorum illum? Labore
                    similique veritatis eligendi!
                  </span>

                  <footer className="footer"></footer>
                </div>
              </article>
              <article className="board__card">
                <div className="board__card__chips__wrapper">
                  <div className="card__chips">
                    <span>High</span>
                  </div>
                  <div className="card__chips">
                    <span>High</span>
                  </div>
                </div>
                <div className="card__content">
                  <h2 className="card__title">Inventaire</h2>
                  <span className="card__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum ex quaerat, voluptates, asperiores rerum consequuntur
                    expedita nesciunt molestias cum alias labore facilis
                    incidunt, adipisci nemo nostrum ratione provident dolorem
                    modi itaque earum ullam animi dolorum illum? Labore
                    similique veritatis eligendi!
                  </span>

                  <footer className="footer"></footer>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Board
