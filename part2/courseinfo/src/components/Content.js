import React from 'react'
import { Part } from './Part'

const Content = ({ parts }) => {
  return (
      parts.map(p => <Part part={p} key={p.id}/>)
  )
}

export default Content