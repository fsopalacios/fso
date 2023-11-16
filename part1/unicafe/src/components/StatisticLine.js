import React from 'react'

export const StatisticLine = ({text, st}) => {

  return (
    <tr><td>{text}</td><td>{st}{text==='positive' ? ' %' : <></>}</td></tr>
  )
}
