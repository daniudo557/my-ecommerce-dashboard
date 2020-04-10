import styled from 'styled-components'
import colors from '../themes/colors'

export const Container = styled.div`
  justify-content: center;
  display: flex;
  width: calc(100% - 64px);
  margin-left: 64px;
  margin-top: 24px;

  @media screen and (max-width: 812px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 0px;
  }
`

export const ContentContainer = styled.div`
  width: 100%;
   padding: 16px 32px 0px 32px;
   
   @media screen and (max-width: 812px) {
    padding: 8px 16px 0px 16px;
  }
`

const defaultCard = `
  width: 100%;
  background-color: ${colors.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.14);
  `

export const Card = styled.div`
  ${defaultCard}
  margin: 16px 0px 32px 0px;
  height: calc(50vh - 64px);

  @media screen and (max-width: 812px) {
    margin: 8px 0px 16px 0px;
    height: calc(50vh - 24px);
  }
`
export const BigCard = styled.div`
  ${defaultCard}
  margin: 16px 0px 32px 0px;
  height: calc(100vh - 110px);

  @media screen and (max-width: 812px) {
    margin: 9px 0px 16px 0px;
    height: calc(100vh - 64px);
  }
`
export const ResponsiveCard = styled.div`
 ${defaultCard}
  margin: 16px 0px 32px 0px;
  padding: 64px;

  @media screen and (max-width: 812px) {
    margin: 8px 0px 16px 0px;
    padding: 32px;
  }
`

export const CardTitle = styled.h2`
  text-align: center;
  padding: 16px 0px;

  @media screen and (max-width: 812px) {
    font-size: 16px; 
    padding: 8px 0px;
  }
`
