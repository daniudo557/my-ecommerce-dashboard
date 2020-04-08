import React from 'react'
import GlobalStyle from './styles/global'
import { Container } from './styles'
import Layout from './components/layout'

function App () {
  return (
    <Layout>
      <Container>
        <GlobalStyle />
      </Container>
    </Layout>
  )
}

export default App
