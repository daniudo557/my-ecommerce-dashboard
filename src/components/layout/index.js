import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar, faBars, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

import Sidebar from '../sidebar'
import { useWindowDimensions } from '../../functions/functions'
import { ItemButton, MenuItem, Label } from './styles'

const Layout = () => {
  const { pathname } = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { width } = useWindowDimensions()
  const isMobile = width < 812
  const itemsArray = [
    { text: 'Favoritos', icon: faStar, path: '/favorites' },
    { text: 'Alertas', icon: faCoffee, path: '/alerts' },
    { text: 'Mensagens', icon: faStar, path: '/messages' },
    { text: 'Comentários', icon: faStar, path: '/comments' },
    { text: 'Analytics', icon: faChartBar, path: '/analytics' }
  ]

  console.log(width)

  const renderSideBarItems = (itemsArray) => {
    const currrentItemStyle = {
      background: '#039BE5',
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
          >
            <FontAwesomeIcon style={{ alignItems: 'flex-start', fontSize: isMobile ? 15 : 30 }} color='#fff' icon={item.icon} />
            {(sidebarOpen) && <Label>{item.text}</Label>}
          </ItemButton>
        )
      }))
  }

  return (
    <Sidebar
      toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      isOpen={sidebarOpen}
    >
      <MenuItem onClick={() => setSidebarOpen(!sidebarOpen)}>
        <FontAwesomeIcon style={{ alignItems: 'center', fontSize: isMobile ? 15 : 30 }} color='#fff' icon={faBars} />
      </MenuItem>
      {renderSideBarItems(itemsArray)}
    </Sidebar>
  )
}

export default Layout
