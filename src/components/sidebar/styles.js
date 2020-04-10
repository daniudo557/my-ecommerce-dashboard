import styled from 'styled-components'
import colors from '../../themes/colors'

const sideBarDefault = `
  height: 100vh;
  background-color: ${colors.mediumGray};
  color: ${colors.white};
  position: fixed;
  z-index: 200;
`

export const BigSidebar = styled.div`
  ${sideBarDefault}
  width: 256px;
`

export const LittleSidebar = styled.div`
  ${sideBarDefault}
  width: 64px; 
`
