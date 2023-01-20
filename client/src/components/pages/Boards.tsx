import BoardCard from '../board/components/BoardCard'
import CreateBoardCard from '../board/components/CreateBoardCard'

const Boards = () => {
  return (
    <div className="boards__container">
      <div className="boards__wrapper">
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <CreateBoardCard />
      </div>
    </div>
  )
}

export default Boards
