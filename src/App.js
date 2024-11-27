import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import ListaNPO from './components/ListaNPO';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <LanguageSelector />
      <div className="containerTitulo">
        <h1>{t('title')}</h1>
      </div>
      <ListaNPO />
    </div>
  );
}

export default App;
