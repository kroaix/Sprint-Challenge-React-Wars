import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharactersCard from './components/CharactersCard.js'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      console.log('Success!', response);
      setData(response.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map((value, key) => {
        return(
          <CharactersCard value={value} key={key} />
        )
      })}
    </div>
  );
}

export default App;
