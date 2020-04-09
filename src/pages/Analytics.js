import React from 'react'
import { Container, Card, ContentContainer } from './styles'
import ReactEcharts from 'echarts-for-react'
import { useWindowDimensions } from '../functions/functions'
import { sales } from '../assets/sales.json'

const Analytics = () => {
  const { width } = useWindowDimensions()
  const isMobile = width < 812
  const yearsArray = []

  // Best way donw there! :)
  Object.values(sales[0]).map((saleObject) =>
    Object.entries(saleObject).map(([saleObjectKey, saleObjectValue]) =>
      saleObjectKey !== 'title' && Object.values(saleObjectValue).map((yearObject) =>
        Object.keys(yearObject).map((saleYear) => yearsArray.push(saleYear))
      )
    )
  )

  const saleArray = []

  sales.map((saleObject) => {
    const saleArrayItem = {}
    const dataArrayTotal = []
    const dataArrayEcommerce = []

    Object.entries(saleObject).map(([saleLabel, object]) => {
      Object.assign(saleArrayItem, { label: saleLabel })

      return Object.entries(object).map(([saleObjectKey, saleObjectValue]) => {
        saleObjectKey === 'CGR' && Object.assign(saleArrayItem, { CGR: saleObjectValue })
        saleObjectKey === 'title' && Object.assign(saleArrayItem, { title: saleObjectValue })
        return saleObjectKey !== 'title' && Object.values(saleObjectValue).map((yearObject) => {
          return Object.values(yearObject).map((saleYearObject) =>
            Object.entries(saleYearObject).map(([saleType, saleValue]) =>
              saleType === 'total' ? dataArrayTotal.push(saleValue) : dataArrayEcommerce.push(saleValue)
            )
          )
        })
      })
    })
    Object.assign(saleArrayItem, { dataTotal: dataArrayTotal })
    Object.assign(saleArrayItem, { dataEcommerce: dataArrayEcommerce })

    return saleArray.push(saleArrayItem)
  })
  console.log(saleArray)
  console.log(yearsArray)
  const getOption = (item) => {
    return {
      title: {
        text: item.title
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

  return (
    <Container>
      <ContentContainer>
        {saleArray.map((item, index) =>
          <Card key={index} style={{ margin: isMobile ? '8px 0px 16px 0px' : '16px 0px 32px 0px' }}>
            <ReactEcharts
              option={getOption(item)}
              style={{ height: '100%', width: '100%' }}
            />
          </Card>
        )}

        {/* <HalfCard style={{ margin: isMobile ? '16px 8px 16px 0px' : '16px 16px 32px 0px' }}>
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
        </HalfCard> */}
        {/* <Card style={{ margin: isMobile ? '16px 0px 8px 0px' : '32px 0px 16px 0px' }}>
          <ReactEcharts
            option={getOption()}
            style={{ height: '100%', width: '100%' }}
          />
        </Card> */}
      </ContentContainer>
    </Container>
  )
}
export default Analytics
