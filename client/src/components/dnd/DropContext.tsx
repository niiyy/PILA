import React from 'react'

export interface DropContextProps {
  children: JSX.Element
}

const DropContext = ({ children }: DropContextProps) => {
  return <>{children}</>
}

export default DropContext
