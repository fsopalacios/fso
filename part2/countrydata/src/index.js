import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';

const App = () => {
  const [countryList, SetCountryList] = useState([])
  const [countryToShow, setCountryToShow] = useState([])

  useEffect(() => {
   axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => SetCountryList(response.data))
  }, [])

  const handleFilter = (e) => {
    const newList = countryList.filter(c => c.name.official.toLowerCase().includes(e.target.value.toLowerCase()))
    setCountryToShow(newList)
  }

  const handleShow = (country) => {
    const newList = countryList.filter(c => c.name.official.toLowerCase().includes(country.toLowerCase()))
    setCountryToShow(newList)
  }

  let languages
  if(countryToShow.length === 1) {
    languages = Object.values(countryToShow[0].languages)
  }
  
  return (
    <div>
      find countries <input type='text' onChange={handleFilter}/>
      {
        countryToShow.length === 1
        ?
        <div>
          <h1>{countryToShow[0].name.official}</h1>
          <p>capital {countryToShow[0].capital[0]}</p>
          <p>population {countryToShow[0].population}</p>
          {
            languages.length > 1
            ?
              <h3>languages</h3>
            :
              <h3>language</h3>
          }
          <ul>
          {
            languages.map(l => <li key={l}>{l}</li>)
          }
          </ul>
          <img src={countryToShow[0].flags.png} alt={`${countryToShow[0].name.official} flag`}/>
        </div>
        :
          countryToShow.length === 0
          ?
            <p>Please, type a country</p>
          :
            countryToShow.length > 10
            ?
              <p>Too many matches, specify another filter</p>
            :
            countryToShow.map(c => <p key={c.name.official}>{c.name.official} <button onClick={() => handleShow(c.name.official)}>show</button></p>)
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