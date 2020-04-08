import React, { useState } from 'react'
import Sidebar from '../sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderSideBarItems = (itemsArray) => {
    return (
      itemsArray.map((item, index) => {
        return (
          <div key={index} style={{ backgroundColor: 'red', height: 20, alignSelf: 'center' }}>
            <a key='0' href=''>
              <FontAwesomeIcon color='#fff' icon={item.icon} />
              <span>{item.text}</span>
            </a>
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
