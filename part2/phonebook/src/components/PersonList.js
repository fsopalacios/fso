import React from 'react'

export const PersonList = ({persons, personsToShow}) => {
    return (
    <>
      {
        personsToShow 
          ?
            personsToShow.map(p => <p key={p.name}>{p.name} {p.number}</p>)
          :
            persons.map(p => <p key={p.name}>{p.name} {p.number}</p>)
      }
    </>
  )
}
