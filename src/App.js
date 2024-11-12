import React from 'react';
import ListaNPO from './components/ListaNPO';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 style={{ color: 'var(--naranja-brillante)' }}>Herramienta de Listas NPO para Kill Team</h1>
      <ListaNPO />
    </div>
  );
}

export default App;
