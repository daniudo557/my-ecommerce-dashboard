import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCoffee, faStar, faBars, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

import colors from '../../themes/colors'
import Sidebar from '../sidebar'
import { useWindowDimensions } from '../../functions/functions'
import { ItemButton, MenuItem, Label, Header } from './styles'

const Layout = () => {
  const { pathname } = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { width } = useWindowDimensions()
  const isMobile = width <= 812
  const itemsArray = [
    { text: 'Home', icon: faHome, path: '/' },
    { text: 'Alertas', icon: faCoffee, path: '/alerts' },
    { text: 'Mensagens', icon: faStar, path: '/messages' },
    { text: 'Comentários', icon: faStar, path: '/comments' },
    { text: 'Analytics', icon: faChartBar, path: '/analytics' }
  ]

  console.log(width)

  const renderSideBarItems = (itemsArray) => {
    const currrentItemStyle = {
      background: colors.lightBlue,
      borderTopRightRadius: isMobile ? 5 : 20,
      borderBottomRightRadius: isMobile ? 5 : 20
    }
    const sidebarClosedStyle = { justifyContent: !sidebarOpen && 'center' }

    return (
      itemsArray.map((item, index) => {
        const itemStyle = pathname === item.path ? currrentItemStyle : {}
        return (
          <ItemButton
            style={{ ...itemStyle, ...sidebarClosedStyle }}
            key={index}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
          >
            <FontAwesomeIcon style={{ alignItems: 'flex-start', fontSize: isMobile ? 15 : 30 }} color={colors.white} icon={item.icon} />
            {(sidebarOpen) && <Label>{item.text}</Label>}
          </ItemButton>
        )
      }))
  }
  const renderBurguerButton = () =>
    <MenuItem onClick={() => setSidebarOpen(!sidebarOpen)}>
      <FontAwesomeIcon style={{ alignItems: 'center', fontSize: isMobile ? 15 : 30 }} color={colors.white} icon={faBars} />
    </MenuItem>

  return (
    <Sidebar
      toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      isOpen={sidebarOpen}
    >
      <Header>
        {renderBurguerButton()}
        <div style={{ flexDirection: 'row-reverse', display: 'flex', width: '100%' }}>
          <MenuItem onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FontAwesomeIcon style={{ justifyContent: 'center', fontSize: isMobile ? 15 : 30 }} color={colors.white} icon={faSignOutAlt} />
          </MenuItem>
        </div>
      </Header>
      {isMobile ? sidebarOpen && renderSideBarItems(itemsArray) : renderSideBarItems(itemsArray)}
    </Sidebar>

  )
}

export default Layout
