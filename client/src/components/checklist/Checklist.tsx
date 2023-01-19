import { Dispatch } from 'react'
import ChecklistItem, { CheckListItemProps } from './components/ChecklistItem'

export interface CheckListProps {
  items: CheckListItemProps[]
  checkedItems: string[]
  handleCheckedItems: Dispatch<React.SetStateAction<string[]>>
}

const Checklist = ({
  items,
  checkedItems,
  handleCheckedItems,
}: CheckListProps) => {
  const handleItemClicked = (id: string) => {}

  return (
    <div className="checklist__container">
      {items.map((item) => (
        <ChecklistItem {...item} />
      ))}
    </div>
  )
}

export default Checklist
