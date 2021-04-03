import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Characters from './components/Characters'
import Information from './components/Information'
import Flipping from './components/Flipping'
import './App.css';

function App() {

  

  return (
    <div className="App">
        <Header />
        <SearchBar />
        <Characters />
        <Information />
        <Flipping />
    </div>
  );
}

export default App;
