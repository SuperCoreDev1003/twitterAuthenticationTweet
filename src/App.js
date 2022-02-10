import React from 'react';
import TwitterShare from './TwitterShare';
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TwitterShare />
      </header>
    </div>
  )
}

export default App;