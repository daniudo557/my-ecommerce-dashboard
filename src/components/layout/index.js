import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar, faBars, faChartBar } from '@fortawesome/free-solid-svg-icons'

import Sidebar from '../sidebar'
import useWindowDimensions from '../../functions/functions'
import { Link, Label } from './styles'
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { width } = useWindowDimensions()
  const isMobile = width < 812
  console.log(width)

  const renderSideBarItems = (itemsArray) => {
    return (
      itemsArray.map((item, index) => {
        return (
          <>
            <Link
              style={{ justifyContent: !sidebarOpen && 'center' }}
              key={index} href='#'
            >
              <FontAwesomeIcon style={{ alignItems: 'flex-start', fontSize: 30 }} color='#fff' icon={item.icon} />
              {(!isMobile && sidebarOpen) && <Label>{item.text}</Label>}
            </Link>
          </>
        )
      }))
  }
  const sideBarMenu = () => {
    const itemsArray = [
      { text: 'Favoritos', icon: faStar },
      { text: 'Alertas', icon: faCoffee },
      { text: 'Mensagens', icon: faStar },
      { text: 'Comentários', icon: faStar },
      { text: 'Analytics', icon: faChartBar }
    ]

    return (
      <Sidebar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        isOpen={sidebarOpen}
      >
        <Link
          style={{ justifyContent: 'center' }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FontAwesomeIcon style={{ alignItems: 'center', fontSize: 30 }} color='#fff' icon={faBars} />
        </Link>
        {renderSideBarItems(itemsArray)}
      </Sidebar>
    )
  }
  return (
    <>
      {sideBarMenu()}
      <p>{children}</p>
    </>
  )
}

export default Layout
