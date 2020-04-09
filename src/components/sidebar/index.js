import React from 'react'
import { BigSidebar, LittleSidebar } from './styles'

const Sidebar = ({ children, isOpen }) => {
  const renderContent = () => <div>{children}</div>

  return (
    isOpen
      ? <BigSidebar>{renderContent()}</BigSidebar>
      : <LittleSidebar>{renderContent()}</LittleSidebar>
  )
}

export default Sidebar
