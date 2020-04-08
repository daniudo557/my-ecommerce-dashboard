import React, { useState } from 'react'
import Sidebar from '../sidebar'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderSideBarItems = (itemsArray) => {
    return (
      itemsArray.map((item, index) => {
        return (
          <div key={index} style={{ backgroundColor: 'red', height: 20, alignSelf: 'center' }}>
            <a key='0' href=''><i className='fa fa-fw fa-star-o' />
              <span>{item}</span>
            </a>
          </div>
        )
      }))
  }
  const sideBarMenu = () => {
    const itemsArray = ['Favoritos', 'Alertas', 'Mensagens', 'Comentários', 'Analytics']

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
