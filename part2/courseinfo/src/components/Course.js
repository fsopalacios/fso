import React from 'react'
import { Header } from './Header'
import Content from './Content'

export const Course = ({courses}) => {
  return (
        courses.map(c => 
          <div key={c.id}>
          <Header  course={c.name}/>
          <Content parts={c.parts} />
          </div>
        )
  )
}