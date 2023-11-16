import React from 'react'
import { StatisticLine } from './StatisticLine'

export const Statistics = ({ good, newtral, bad }) => {
  return (
    <div>
        <h1>statistics</h1>
        {good+newtral+bad === 0 
            ? 
                <p>No feedback given</p> 
            : 
                <>
                    <table>
                        <tbody>
                            <StatisticLine text='good' st={good}/>
                            <StatisticLine text='newtral' st={newtral}/>
                            <StatisticLine text='bad' st={bad}/>
                            <StatisticLine text='all' st={good + newtral + bad}/>
                            <StatisticLine text='average' st={(good-bad) / (good + newtral + bad)}/>
                            <StatisticLine text='positive' st={(good * 100) / (good + newtral + bad)}/>
                        </tbody>
                    </table>
                    
                </>
        }
    </div>
  )
}
