import React from 'react'
import { Container, Card, HalfCard } from './styles'
import ReactEcharts from 'echarts-for-react'
import { useWindowDimensions } from '../functions/functions'

const Analytics = () => {
  const { width } = useWindowDimensions()
  const isMobile = width < 812
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
      grid: {
        left: '3%',
        right: '10%',
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
      <div style={{ width: '100%', padding: isMobile ? '0px 16px' : '0px 32px' }}>
        <Card style={{ margin: isMobile ? '16px 0px 8px 0px' : '32px 0px 16px 0px' }}>
          <ReactEcharts
            option={getOption()}
            style={{ height: '100%', width: '100%' }}
          />
        </Card>

        <HalfCard style={{ margin: isMobile ? '16px 8px 16px 0px' : '16px 16px 32px 0px' }}>
          <ReactEcharts
            option={getOption()}
            style={{ height: '100%', width: '100%' }}
          />
        </HalfCard>
        <HalfCard style={{ margin: isMobile ? '16px 0px 16px 8px' : '16px 0px 32px 16px' }}>
          <ReactEcharts
            option={getOption()}
            style={{ height: '100%', width: '100%' }}
          />
        </HalfCard>
        <Card style={{ margin: isMobile ? '16px 0px 8px 0px' : '32px 0px 16px 0px' }}>
          <ReactEcharts
            option={getOption()}
            style={{ height: '100%', width: '100%' }}
          />
        </Card>
      </div>
    </Container>
  )
}
export default Analytics
