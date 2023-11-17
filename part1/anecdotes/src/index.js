import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votesArr = new Uint8Array(anecdotes.length)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(props.votesArr)
  const [mostVoted, setMostVoted] = useState(null)
  const [maxVoted, setMaxVoted] = useState(null)

  const handleNext = () => {
    let next = Math.floor(Math.random() * anecdotes.length)
    if(next !== selected) {
      setSelected(next)
    } else {
      handleNext()
    }
  }

  const vote = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    let max = maxVoted ? maxVoted : 0
    let most = mostVoted ? mostVoted : 0

    for(let i = 0; i < newVotes.length; i++){
      if(newVotes[i] > max){
        most = i
        max = newVotes[i]
      }
    }
    setMostVoted(most)
    setMaxVoted(max)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      {
        mostVoted !== null 
        ? 
          <>
            <h1>Anecdote with most votes</h1>
            <p>{props.anecdotes[mostVoted]}</p>
            <p>has {votes[mostVoted]} votes</p>
          </>
        : 
          <p>No Votes</p>
      }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} votesArr={votesArr}/>
  </React.StrictMode>
);
