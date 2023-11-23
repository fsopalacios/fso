import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { PersonList } from './components/PersonList';

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
      <Filter handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm setNewName={setNewName} setNewNumber={setNewNumber} handleNew={handleNew} />
      <h2>Numbers</h2>
      <PersonList persons={persons} personsToShow={personsToShow} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);