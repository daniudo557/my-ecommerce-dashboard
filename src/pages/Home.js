import React from 'react'

import { Container, WelcomeCard, ContentContainer } from './styles'
import { useWindowDimensions } from '../functions/functions'

const Home = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= 812
  return (
    <Container>
      <ContentContainer>
        <WelcomeCard>
          <h2 style={{ textAlign: 'center', fontSize: isMobile ? 25 : 40 }}>Bem vindo(a)!</h2>
          <div style={{ margin: isMobile ? '16px 0px' : '32px 0px' }}>
            <p style={{ fontSize: isMobile ? 22 : 37 }}>
            Este é um dashboard fictício para analisar os dados das vendas de diversas mercadorias desde o ano de 1999 até 2015 nos Estados Unidos.
            </p>
          </div>
        </WelcomeCard>
      </ContentContainer>
    </Container>
  )
}

export default Home
