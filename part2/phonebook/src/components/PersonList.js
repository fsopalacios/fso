import React from 'react'

export const PersonList = ({persons, personsToShow, erase}) => {
    return (
    <>
      {
        personsToShow 
          ?
            personsToShow.map(p => <p key={p.name}>{p.name} {p.number} <button onClick={() => {if(window.confirm(`Delete ${p.name}?`)){erase(p.id)}}}>delete</button></p>)
          :
            persons.map(p => <p key={p.name}>{p.name} {p.number} <button onClick={() => {if(window.confirm(`Delete ${p.name}?`)){erase(p.id)}}}>delete</button></p>)
      }
    </>
  )
}
