import React from 'react'

import { BigSidebar, LittleSidebar } from './styles'
import { useWindowDimensions } from '../../functions/functions'

const Sidebar = ({ children, isOpen }) => {
  const renderContent = () => <div>{children}</div>
  const { width } = useWindowDimensions()
  const isMobile = width <= 812

  if (isMobile) {
    return <></>
  }
  return (isOpen
    ? <BigSidebar>{renderContent()}</BigSidebar>
    : <LittleSidebar>{renderContent()}</LittleSidebar>
  )
}

export default Sidebar
