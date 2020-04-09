import React from 'react'
import GlobalStyle from './styles/global'
import Layout from './components/layout'
import { withRouter } from 'react-router-dom'

const App = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <GlobalStyle />
      <Layout />
      {children}
    </div>
  )
}

export default withRouter(App)
