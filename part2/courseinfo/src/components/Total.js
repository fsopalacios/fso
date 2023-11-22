import React from 'react'

export const Total = ({parts}) => {
    const totalExercises = parts.reduce((s, p) => s + p.exercises,0)
    return (
    <div>total of {totalExercises} exercises</div>
  )
}
