import React from 'react'
import { VscBell } from 'react-icons/vsc'

const AsideItem = ({ active, label }: { active?: boolean; label: string }) => {
  return (
    <div className={`aside__item ${active ? 'aside__item--active' : ''}`}>
      <VscBell />
      <span>{label}</span>
    </div>
  )
}

export default AsideItem
