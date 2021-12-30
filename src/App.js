import './App.css';
import CountriesList from './components/CountriesList';
import Header from './components/Header';
import axios from 'axios'
import Popup from './components/Popup'
import { useState, useEffect, createContext } from 'react'

export const searchContext = createContext()
function App() {
  const [countiresList, setCountriesList] = useState([]) // can I?
  const [searchValue, setSearchValue] = useState('')

  useEffect(getCountires, [])

  function getCountires() {
    axios.get('https://restcountries.com/v3.1/all')
      .then(result => {
        setCountriesList(result.data)
      })
  }
  return (
    <div className='App'>
      <searchContext.Provider value={setSearchValue} >
        <Header className='App-header' CN={countiresList.length} />
      </searchContext.Provider>
      <CountriesList search="" />
      <Popup />
    </div >
  );
}

export default App;
