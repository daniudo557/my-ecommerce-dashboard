import React from 'react'
import { BigSidebar, LittleSidebar } from './styles'

const Sidebar = ({ children, isOpen, toggleSidebar }) => {
  const renderContent = () => {
    return (
      <>
        <button
          onClick={() => toggleSidebar(!isOpen)}
        >
        close
        </button>
        <div>{children}</div>
      </>
    )
  }
  return (
    isOpen
      ? <BigSidebar>{renderContent()}</BigSidebar>
      : <LittleSidebar>{renderContent()}</LittleSidebar>

  )
}

export default Sidebar
