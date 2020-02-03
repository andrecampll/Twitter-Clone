import React from 'react';
import Nav from './components/Nav/Index';
import MainContainer from './components/Main-Container/Index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
