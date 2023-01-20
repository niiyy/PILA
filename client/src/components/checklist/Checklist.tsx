import { Dispatch } from 'react'
import ChecklistItem, { CheckListItemProps } from './components/ChecklistItem'

export interface CheckListProps {
  items: CheckListItemProps[]
}

const Checklist = ({ items }: CheckListProps) => {
  return (
    <div className="checklist__container">
      {items.map((item) => (
        <ChecklistItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Checklist
