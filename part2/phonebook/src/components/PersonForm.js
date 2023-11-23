import React from 'react'

export const PersonForm = ({setNewName, setNewNumber, handleNew}) => {
  return (
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
  )
}
