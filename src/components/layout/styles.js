import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../themes/colors'

export const PurpleSquareContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const PurpleSquare = styled.div`
background-color: #B10DC9;
width: 30px;
height: 30px;
border: solid #000;
`
const touchableLink = `
  display: flex;
  align-items: center;
  padding: 8px 16px;
  text-decoration: none;
  border-color: rgb(255,255,255, 0.30);
  border-width: 2px;

  :hover {
    opacity: 0.7;
  }
`
export const MenuItem = styled.a`
  ${touchableLink}
  background: ${colors.darkGray};
  justify-content: center;
`

export const ItemButton = styled(Link)`
  border-style: solid none none none;
  ${touchableLink}
`

export const Label = styled.span`
  display: flex;
  padding-left: 16px;
  align-items: center;
  text-align: center;
  line-height: 1.2;
  color: white;
`
