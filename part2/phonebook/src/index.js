import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { PersonList } from './components/PersonList';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  

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