import React from 'react';
import ListaNPO from './components/ListaNPO';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="containerTitulo"><h1>Crea tu Lista de NPOs</h1></div>
      
      <ListaNPO />
    </div>
  );
}

export default App;
