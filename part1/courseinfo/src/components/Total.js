import React from 'react'

export const Total = ({ parts }) => {
  return (
    <div>Numbers of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</div>
  )
}
