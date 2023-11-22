import React from 'react'

export const Total = ({parts}) => {
    let totalExercises = 0
    for(let i = 0; i < parts.length; i++){
        totalExercises += parts[i].exercises
    }
    return (
    <div>total of {totalExercises} exercises</div>
  )
}
