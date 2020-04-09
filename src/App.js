import React from 'react'
import GlobalStyle from './styles/global'
import { Container } from './styles'
import Layout from './components/layout'
import { withRouter } from 'react-router-dom'

const App = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GlobalStyle />
      <Layout />
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default withRouter(App)
