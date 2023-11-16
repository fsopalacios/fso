import React from 'react'

export const StatisticLine = ({text, st}) => {
  return (
    <p>{text} {st} {text==='positive' ? '%' : <></>}</p>
  )
}
