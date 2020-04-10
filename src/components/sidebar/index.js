import React from 'react'

import { BigSidebar, LittleSidebar, MobileSidebar } from './styles'
import { useWindowDimensions } from '../../functions/functions'

const Sidebar = ({ children, isOpen }) => {
  const renderContent = () => <div>{children}</div>
  const { width } = useWindowDimensions()
  const isMobile = width <= 812

  // In mobile, sidebar is invisible when its closed
  const renderMobileSidebar = () => isOpen ? <MobileSidebar>{renderContent()}</MobileSidebar> : renderContent()

  const renderDesktopSidebar = () =>
    isOpen
      ? <BigSidebar>{renderContent()}</BigSidebar>
      : <LittleSidebar>{renderContent()}</LittleSidebar>

  // This have to be done because sidebar is different to mobile and desktop
  return isMobile ? renderMobileSidebar() : renderDesktopSidebar()
}

export default Sidebar
