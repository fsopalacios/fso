import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { PersonList } from './components/PersonList';
import personsService from './services/number';

const App = () => {
  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personsService.getAll()
      .then(response => {
        setPersons(response.data)
      })
      .catch(e => console.log(e))
  }, [])
  

  const handleNew = (e) => {
    e.preventDefault()
    const exist = persons.filter(p => p.name === newName)
    if(exist.length > 0){
      alert(`${newName} already added to phonebook`)
    } else {
      let newPersons = [...persons]
      personsService.create({name: newName, number: newNumber})
      .then(response => {
        newPersons.push({name: newName, number: newNumber})
        setPersons(newPersons)
        document.getElementById('inputName').value=''
        document.getElementById('inputNumber').value=''
        setNewName('')
        setNewNumber('')
      }
      )
      .catch(error => console.log('no creado'))
    }
  }

  const handleFilter = (e) => {
    let prevFiltered = [...persons]
    const filtered = prevFiltered.filter(p => p.name.toLowerCase().includes(e.toLowerCase()))
    setPersonsToShow(filtered)
  }

  const erase = (id) => {
    console.log(id)
    personsService.erase(id)
    .then(r =>{
      let prevFiltered = [...persons]
      const filtered = prevFiltered.filter(p => p.id !== id)
      setPersons(filtered)
    })
    .catch(e => console.log(e))
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm setNewName={setNewName} setNewNumber={setNewNumber} handleNew={handleNew} />
      <h2>Numbers</h2>
      <PersonList persons={persons} personsToShow={personsToShow} erase={erase}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);