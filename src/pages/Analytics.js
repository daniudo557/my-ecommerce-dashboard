import React from 'react'
import { Container, PurpleSquareContainer, PurpleSquare } from './styles'
import ReactEcharts from 'echarts-for-react'

const Analytics = () => {
  const getOption = () => {
    return {
      title: {
        text: 'aa'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['primeiro', 'segundo', 'terceiro']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'primeiro',
          type: 'line',
          stack: 'Total',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'segundo',
          type: 'line',
          stack: 'Total',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'terceiro',
          type: 'line',
          stack: 'Total',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        }
      ]
    }
  }
  return (
    <Container>
      <div style={{ backgroundColor: 'blue' }}>
        <PurpleSquareContainer>
          <ReactEcharts
            option={getOption()}
            style={{ height: '350px', width: '100%' }}
          />
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
