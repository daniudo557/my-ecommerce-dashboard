import { useState, useEffect } from 'react'
import { sales } from '../assets/sales.json'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize () {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

// This function treats imported json and returns a new object much more easy to manipulate
export const getSaleArray = () => {
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
  return saleArray
}

// This function takes imported json and return all years that have in it
export const getYearsArray = () => {
  const yearsArray = []
  Object.values(sales[0]).map((saleObject) =>
    Object.entries(saleObject).map(([saleObjectKey, saleObjectValue]) =>
      saleObjectKey !== 'title' && Object.values(saleObjectValue).map((yearObject) =>
        Object.keys(yearObject).map((saleYear) => yearsArray.push(saleYear))
      )
    )
  )
  return yearsArray
}
