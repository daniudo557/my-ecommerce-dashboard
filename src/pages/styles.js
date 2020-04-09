import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  display: flex;
  width: calc(100% - 64px);
  margin-left: 64px;

  @media screen and (max-width: 812px) {
    width: 100%;
    margin-left: 0px;
  }
`

export const PurpleSquareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PurpleSquare = styled.div`
  background-color: #B10DC9;
  margin: 16px;
  width: 300px;
  height: 300px;
  border: solid #000;
`
const defaultCard = `
  width: 100%;
  height: calc(50vh - 48px);
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.14);
`
export const Card = styled.div`
  ${defaultCard}
`
export const HalfCard = styled.div`
  ${defaultCard}
  display: inline-block;
  vertical-align: middle;
  width: calc(50% - 16px);

  @media screen and (max-width: 812px) {
    width: calc(50% - 8px);
  }
`
