import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Statistics } from './components/Statistics';
import { Button } from './components/Button';

const App = () => {
  const [good, setGood] = useState(0)
  const [newtral, setNewtral] = useState(0)
  const [bad, setBad] = useState(0)

  const vote = (type) => {
    if(type === 'good'){
      setGood(good + 1)
    }
    if(type === 'newtral'){
      setNewtral(newtral + 1)
    }
    if(type === 'bad'){
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button vote={vote} type='good' />
        <Button vote={vote} type='newtral' />
        <Button vote={vote} type='bad' />
      </div>
      <Statistics good={good} newtral={newtral} bad={bad} />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

