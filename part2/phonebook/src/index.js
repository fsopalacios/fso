import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:"040-1234567" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNew = (e) => {
    e.preventDefault()
    const exist = persons.filter(p => p.name === newName)
    console.log(exist)
    if(exist.length > 0){
      alert(`${newName} already added to phonebook`)
    } else {
      let newPersons = [...persons]
      newPersons.push({name: newName, number: newNumber})
      setPersons(newPersons)
      document.getElementById('inputName').value=''
      document.getElementById('inputNumber').value=''
      setNewName('')
      setNewNumber('')
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input id='inputName' onChange={e => setNewName(e.target.value)} autoFocus/>
        </div>
        <div>
          number: <input id='inputNumber' onChange={e => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={handleNew}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => <p key={p.name}>{p.name} {p.number}</p>)}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);