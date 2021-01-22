import React from 'react';
import './App.css';
import Cards from './components/Cards';
import { useFetch } from './hooks/useFetch';

function App() {
  const { loading, data } = useFetch('https://acnhapi.com/v1a/villagers')

  const randomVillagers = data.sort(() => Math.random() - Math.random()).slice(0, 30)
  const villagersToMatch = [ 
    ...randomVillagers.sort(() => Math.random() - Math.random()), 
    ...randomVillagers.sort(() => Math.random() - Math.random()) ];

  return (
    <div className="App">
      <header className="App-header">
        <Cards loading={loading} villagers={villagersToMatch} />
      </header>
    </div>
  );
}

export default App;
