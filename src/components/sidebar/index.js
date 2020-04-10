import React from 'react'

import { BigSidebar, LittleSidebar, MobileSidebar } from './styles'
import { useWindowDimensions } from '../../functions/functions'

const Sidebar = ({ children, isOpen }) => {
  const renderContent = () => <div>{children}</div>
  const { width } = useWindowDimensions()
  const isMobile = width <= 812

  const renderMobileSidebar = () => isOpen ? <MobileSidebar>{renderContent()}</MobileSidebar> : renderContent()

  const renderDesktopSidebar = () =>
    isOpen
      ? <BigSidebar>{renderContent()}</BigSidebar>
      : <LittleSidebar>{renderContent()}</LittleSidebar>

  return isMobile ? renderMobileSidebar() : renderDesktopSidebar()
}

export default Sidebar
