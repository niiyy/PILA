import React, { Dispatch, MouseEventHandler } from 'react'
import { FiCheck } from 'react-icons/fi'

export interface CheckListItemProps {
  label: string
  checked?: boolean
  icon?: JSX.Element
  id: string
}

const ChecklistItem = ({ label, icon, checked }: CheckListItemProps) => {
  return (
    <div className={`checklist__item ${checked ? '--checked' : ''}`}>
      <div className="checklist__item__icon">{icon ? icon : <FiCheck />}</div>
      <span>{label}</span>
    </div>
  )
}

export default ChecklistItem
