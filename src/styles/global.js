import { createGlobalStyle } from 'styled-components'
import colors from '../themes/colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    background-color: ${colors.lightGray};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  
  html, body, #root {
    overflow-x: hidden;
    height: 100%;
    width: 100%;
  }
`
