import React from 'react'
import ReactEcharts from 'echarts-for-react'

import { Container, Card, BigCard, ContentContainer, CardTitle } from './styles'
import { useWindowDimensions, getSaleArray, getYearsArray } from '../functions/functions'
import colors from '../themes/colors'

const Analytics = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= 812
  const saleArray = getSaleArray()
  const yearsArray = getYearsArray()

  // This function treats saleArray to return he expected object of ECharts pie graph
  const getSourcePieGraph = (saleArray) => {
    const source = []
    saleArray.map(item => {
      const sourceItem = []
      item.title !== 'Total' &&
      sourceItem.push(item.title, ...item.dataEcommerce)
      return source.push(sourceItem)
    })
    return source
  }

  /* All getOption functions get custom option for each graph that will be renderized */
  const getOptionSaleItem = (item, saleIndex) => {
    return {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Total', 'Ecommerce']
      },
      grid: {
        left: isMobile ? '3%' : '5%',
        height: isMobile ? '70%' : '90%',
        bottom: isMobile ? '20%' : '25%',
        containLabel: true
      },

      // This color array maintains "Total" color with the first element of 'colors.saleArray' and the
      // remaining colors is reffered to the correspondent index of array
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

  const getOptionAllSalesDesktop = (source) => {
    const saleTitle = source.map(sale => sale[0])
    return {
      tooltip: {
        trigger: 'item',
        showContent: true
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        height: width >= 1024 ? '40%' : '30%',
        left: '60%',
        top: width >= 1024 ? '3%' : '5%',
        data: saleTitle,

        selected: saleTitle
      },
      dataset: {
        source: [
          ['product', ...yearsArray],
          ...source
        ]
      },
      // This color array connects it color to your sale correspondent
      // It ignores the first element of 'colors.saleArray' because it is reffered to 'Total'
      color: colors.saleArray.slice(1),
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: {
        bottom: width >= 1024 ? '16%' : '20%',
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

  const getOptionAllSalesMobile = (source) => {
    const saleTitle = source.map(sale => sale[0])
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
        bottom: 64,
        data: saleTitle,

        selected: saleTitle
      },
      color: colors.saleArray.slice(1),
      series: [
        {
          type: 'pie',
          top: width >= 600 ? 32 : 0,
          radius: width >= 550 ? '55%' : '70%',
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
      option={getOptionAllSalesDesktop(source)}
      style={{ height: '100%', width: '100%' }}
    />

  const renderMobileGraphic = () =>
    <ReactEcharts
      option={getOptionAllSalesMobile(source)}
      style={{ height: '100%', width: '100%' }}
    />

  const source = getSourcePieGraph(saleArray)
  return (
    <Container>
      <ContentContainer>
        <BigCard>
          <CardTitle>Todos os produtos</CardTitle>
          {/* This have to be done because it has a different design for mobile and desktop */}
          {width >= 600 ? renderDesktopGraphic() : renderMobileGraphic()}
        </BigCard>
        {saleArray.map((item, index) =>
          <Card key={index}>
            <CardTitle>{item.title}</CardTitle>
            <ReactEcharts
              option={getOptionSaleItem(item, index)}
              style={{ height: '100%', width: '100%' }}
            />
          </Card>
        )}
      </ContentContainer>
    </Container>
  )
}
export default Analytics
