import './App.css';
import CountriesList from './components/CountriesList';
import Header from './components/Header';
import axios from 'axios'
import { useState, useEffect } from 'react'
function App() {
  const [countiresList, setCountriesList] = useState([]) // can I?

  useEffect(getCountires, [])

  function getCountires() {
    axios.get('https://restcountries.com/v3.1/all')
      .then(result => {
        setCountriesList(result.data)
        console.log(Object.keys(result.data).length);
      })
  }
  console.log(Object.keys(countiresList).length);
  return (
    <div className='App'>
      
      <Header className='App-header' countriesNumber={Object.keys(countiresList).length} />
      <CountriesList search="" />
    </div>
  );
}

export default App;
