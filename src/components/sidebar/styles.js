import styled from 'styled-components'

export const BigSidebar = styled.div`
  height: 100%;
  background-color: navy;
  opacity: 0.8;
  color: white;
  width: 260px;
  position: fixed;
  z-index: 200;

  @media screen and (max-width: 812px) {
    background-color:red;
    width: 100%;
  }
`

export const LittleSidebar = styled.div`
  height: 100%;
  padding-left: 20px;
  background-color: navy;
  opacity: 0.8;
  color: black;
  width: 60px;
  position: fixed;
  z-index: 200;

  @media screen and (max-width: 812px) {
    background-color:green;
    width: 30vh;
  }
`
