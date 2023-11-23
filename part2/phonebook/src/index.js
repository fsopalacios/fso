import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [personsToShow, setPersonsToShow] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNew = (e) => {
    e.preventDefault()
    const exist = persons.filter(p => p.name === newName)
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

  const handleFilter = (e) => {
    let prevFiltered = [...persons]
    const filtered = prevFiltered.filter(p => p.name.toLowerCase().includes(e.toLowerCase()))
    setPersonsToShow(filtered)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input id="inputFilter" onChange={e => handleFilter(e.target.value)} />
      <h2>add a new</h2>
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
      {
        personsToShow 
          ?
            personsToShow.map(p => <p key={p.name}>{p.name} {p.number}</p>)
          :
            persons.map(p => <p key={p.name}>{p.name} {p.number}</p>)
      }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);