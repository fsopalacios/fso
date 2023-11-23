import React from 'react'

export const Filter = ({handleFilter}) => {
  return (
    <p>filter shown with <input id="inputFilter" onChange={e => handleFilter(e.target.value)} /></p>
  )
}
