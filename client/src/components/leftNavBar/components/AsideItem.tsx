import React from 'react'
import { VscBell } from 'react-icons/vsc'

const AsideItem = ({ active }: { active?: boolean }) => {
  return (
    <div className={`aside__item ${active ? 'aside__item--active' : ''}`}>
      <VscBell />
      <span>Dashboard</span>
    </div>
  )
}

export default AsideItem
