import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNew = (e) => {
    e.preventDefault()
    let newPersons = [...persons]
    newPersons.push({name: newName})
    setPersons(newPersons)
    document.getElementById('inputName').value=''
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input id='inputName' onChange={e => setNewName(e.target.value)} autoFocus/>
        </div>
        <div>
          <button type="submit" onClick={handleNew}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => <p key={p.name}>{p.name}</p>)}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);