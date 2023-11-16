import React from 'react'

export const Button = ({type, vote}) => {
  return (
    <button onClick={() => vote(type)}>{type}</button>
  )
}
