import React from 'react'

export const Statistics = ({ good, newtral, bad }) => {
  return (
    <div>
        <h1>statistics</h1>
        {good+newtral+bad === 0 
            ? 
                <p>No feedback given</p> 
            : 
                <>
                    <p>good {good}</p>
                    <p>newtral {newtral}</p>
                    <p>bad {bad}</p>
                    <p>all {good + newtral + bad}</p>
                    <p>average {(good-bad) / (good + newtral + bad)}</p>
                    <p>positive {(good * 100) / (good + newtral + bad)} %</p>
                </>
        }
    </div>
  )
}
