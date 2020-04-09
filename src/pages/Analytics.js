import React from 'react'
import { Container, PurpleSquareContainer, PurpleSquare } from './styles'
const Analytics = () => {
  return (
    <Container>
      <div style={{ backgroundColor: 'blue' }}>
        <PurpleSquareContainer>
          <PurpleSquare />
          <PurpleSquare />
          <PurpleSquare />
        </PurpleSquareContainer>
        <h1>Página de Analytics</h1>
        <p>
        Exemplo de Analytics :)
        </p>
      </div>
    </Container>
  )
}
export default Analytics
