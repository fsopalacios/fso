import React from 'react'
import { Part } from './Part'
import { Total } from './Total'

const Content = ({ parts }) => {
  return (
  <>
   {parts.map(p => <Part part={p} key={p.id}/>)}
    <Total parts={parts} />
  </>
  )
}

export default Content