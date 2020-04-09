import styled from 'styled-components'

export const BigSidebar = styled.div`
  height: 100vh;
  background-color: #2D323E;
  color: white;
  width: 260px;


  @media screen and (max-width: 812px) {
    background-color:red;
    width: 100%;
  }
`

export const LittleSidebar = styled.div`
  height: 100vh;
  background-color: #2D323E;
  width: 60px;

  @media screen and (max-width: 812px) {
    background-color:green;
    width: 30vh;
  }
`
