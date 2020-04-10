import React from 'react'
import ReactEcharts from 'echarts-for-react'

import { Container, Card, BigCard, ContentContainer, CardTitle } from './styles'
import { useWindowDimensions, getSaleArray, getYearsArray, getSourcePieGraph } from '../functions/functions'
import colors from '../themes/colors'

const Analytics = () => {
  const { width } = useWindowDimensions()
  const saleArray = getSaleArray()
  const yearsArray = getYearsArray()
  const source = getSourcePieGraph(saleArray)

  const getOption = (item, saleIndex) => {
    return {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Total', 'Ecommerce']
      },
      grid: {
        left: '7%',
        bottom: '20%',
        containLabel: true
      },
      color: [colors.saleArray.slice(-1)[0], colors.saleArray[saleIndex]],
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: yearsArray
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Total',
          type: 'line',
          stack: 'Total',
          areaStyle: { normal: {} },
          data: item.dataTotal
        },
        {
          name: 'Ecommerce',
          type: 'line',
          stack: 'Total',
          areaStyle: { normal: {} },
          data: item.dataEcommerce
        }
      ]
    }
  }

  const getOption2 = (item, source) => {
    const names = source.map(item => item[0])
    return {
      tooltip: {
        trigger: 'item',
        showContent: true
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        height: width >= 1024 ? 512 : 256,
        left: '60%',
        top: width >= 1024 ? '4%' : '6%',
        data: names,

        selected: names
      },
      dataset: {
        source: [
          ['product', ...yearsArray],
          ...source
        ]
      },
      color: colors.saleArray.slice(1),
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: {
        bottom: width >= 1024 ? '12%' : '20%',
        height: '40%'
      },
      series: [
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        {
          type: 'pie',
          id: 'pie',
          radius: width >= 1024 ? '40%' : '35%',
          center: width >= 1024 ? ['30%', '22%'] : ['30%', '19%'],
          label: false,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          encode: {
            itemName: 'product',
            value: '2015',
            tooltip: '2015'
          }
        }
      ]
    }
  }

  const getOption3 = (item, source) => {
    colors.saleArray.shift()
    const names = source.map(item => item[0])
    const nameValue = source.map(item => ({ name: item[0], value: item[3] }))
    return {
      tooltip: {
        trigger: 'item',
        textStyle: {
          color: 'white',
          fontSize: 10
        }
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        height: width >= 600 ? '100%' : '40%',
        bottom: width >= 600 ? 64 : 64,
        data: names,

        selected: names
      },
      color: colors.saleArray.slice(1),
      series: [
        {
          type: 'pie',
          top: width >= 600 ? 32 : 0,
          radius: width >= 600 ? '80%' : '70%',
          center: ['50%', '25%'],
          data: nameValue,
          label: false,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }
  const renderDesktopGraphic = () =>
    <ReactEcharts
      option={getOption2(saleArray, source)}
      style={{ height: '100%', width: '100%' }}
    />

  const renderMobileGraphic = () =>
    <ReactEcharts
      option={getOption3(saleArray, source)}
      style={{ height: '100%', width: '100%' }}
    />

  return (
    <Container>
      <ContentContainer>
        <BigCard>
          <CardTitle>Todos os produtos</CardTitle>
          {width >= 600 ? renderDesktopGraphic() : renderMobileGraphic()}
        </BigCard>
        {saleArray.map((item, index) =>
          <Card key={index}>
            <CardTitle>{item.title}</CardTitle>
            <ReactEcharts
              option={getOption(item, index)}
              style={{ height: '100%', width: '100%' }}
            />
          </Card>
        )}
      </ContentContainer>
    </Container>
  )
}
export default Analytics
