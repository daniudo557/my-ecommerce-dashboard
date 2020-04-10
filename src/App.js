import React from 'react'
import GlobalStyle from './styles/global'
import Layout from './components/layout'
import { withRouter } from 'react-router-dom'
import { Container } from './pages/styles'

const App = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Container />
      {children}
    </>
  )
}

export default withRouter(App)
