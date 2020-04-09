import React from 'react'
import { Container, Card, HalfCard } from './styles'
import ReactEcharts from 'echarts-for-react'
import { useWindowDimensions } from '../functions/functions'
import { sales } from '../assets/sales.json'

const Analytics = () => {
  // console.log('sales', sales)
  const { width } = useWindowDimensions()
  const isMobile = width < 812
  const years = []
  // sales.map((content) => {
  Object.entries(sales[0]).map(([title, value]) => {
    console.log('title', title, 'value', value)

    Object.entries(value).map(([year, item]) => {
      console.log('year', year, 'item', item)
      if (year === 'title') return

      Object.entries(item).map(([actualYear, saleYear]) => {
        if (actualYear === 'CGR') return
        console.log('actualYear', actualYear, 'saleYear', saleYear)

        years.push(actualYear)
      })
    })
  })
  // })

  const dataTotal = []
  const dataEcommerce = []
  Object.entries(sales[0]).map(([title, value]) => {
    console.log('title', title, 'value', value)

    Object.entries(value).map(([year, item]) => {
      console.log('year', year, 'item', item)
      if (year === 'title') return

      Object.entries(item).map(([actualYear, saleYear]) => {
        if (actualYear === 'CGR') return
        console.log('actualYear', actualYear, 'saleYear', saleYear)

        Object.entries(saleYear).map(([saleType, saleValue]) => {
          console.log('saleType', saleType, 'saleValue', saleValue)
          saleType === 'total' && dataTotal.push(saleValue)
          saleType === 'ecommerce' && dataEcommerce.push(saleValue)
        })
      })
    })
  })

  console.log('dataTotal', dataTotal)
  console.log('dataEcommerce', dataEcommerce)

  const getOption = () => {
    return {
      title: {
        text: 'Total'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Total', 'Ecommerce']
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
          data: years
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
          data: dataTotal
        },
        {
          name: 'Ecommerce',
          type: 'line',
          stack: 'Total',
          areaStyle: { normal: {} },
          data: dataEcommerce
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
