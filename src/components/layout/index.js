import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'

import Sidebar from '../sidebar'
import useWindowDimensions from '../../functions/functions'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { width } = useWindowDimensions()
  const isMobile = width < 812
  console.log(width)

  const renderSideBarItems = (itemsArray) => {
    return (
      itemsArray.map((item, index) => {
        return (
          <div key={index} style={{ padding: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: isMobile && 'center' }}>
            <FontAwesomeIcon style={{ backgroundColor: 'yellow', alignItems: 'flex-start', fontSize: 30 }} color='#fff' icon={item.icon} />
            {(!isMobile && sidebarOpen) &&
              <div style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                {item.text}
              </div>}
          </div>
        )
      }))
  }
  const sideBarMenu = () => {
    const itemsArray = [
      { text: 'Favoritos', icon: faStar },
      { text: 'Alertas', icon: faCoffee },
      { text: 'Mensagens', icon: faStar },
      { text: 'Comentários', icon: faStar },
      { text: 'Analytics', icon: faStar }
    ]

    return (
      <Sidebar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        isOpen={sidebarOpen}
      >

        {renderSideBarItems(itemsArray)}
      </Sidebar>
    )
  }
  return (
    <>
      {sideBarMenu()}
      <button style={{ marginLeft: 500 }} onClick={() => setSidebarOpen(!sidebarOpen)}> aaa</button>
      <p>{children}</p>
    </>
  )
}

export default Layout
