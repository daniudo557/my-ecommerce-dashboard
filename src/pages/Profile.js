import React from 'react'

import { Container, ResponsiveCard, ContentContainer } from './styles'
import { useWindowDimensions } from '../functions/functions'

const Profile = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= 812
  return (
    <Container>
      <ContentContainer>
        <ResponsiveCard>
          <h2 style={{ textAlign: 'center', fontSize: isMobile ? 25 : 40 }}>Muito obrigado!</h2>
          <div style={{ margin: isMobile ? '16px 0px' : '32px 0px' }}>
            <p style={{ fontSize: isMobile ? 22 : 37 }}> Este projeto foi criado e desenvolvido por Daniel Macedo.</p>
            <p style={{ fontSize: isMobile ? 22 : 37 }}> Tecnologias utilizadas: React, ECharts.</p>
            <p style={{ fontSize: isMobile ? 22 : 37 }}>
              Siga-me no <a href='https://www.linkedin.com/in/macedo-daniel/'>Linkedin</a> e no <a href='https://github.com/daniudo557/'>GitHub.</a>
            </p>
          </div>
        </ResponsiveCard>
      </ContentContainer>
    </Container>
  )
}

export default Profile
