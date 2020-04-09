import styled from 'styled-components'

export const BigSidebar = styled.div`
  height: 100vh;
  background-color: #2D323E;
  color: white;
  width: 256px;
  position: fixed;
  z-index: 200;


  @media screen and (max-width: 812px) {
    width: 256px;
  }
`

export const LittleSidebar = styled.div`
  height: 100vh;
  background-color: #2D323E;
  width: 64px; 
  position: fixed;
  z-index: 200;
  
  @media screen and (max-width: 812px) {
    width: 64px;
  }
`
