import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    window.location.reload();
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('es')} className="flag es" aria-label="Español" />
      <button onClick={() => changeLanguage('en')} className="flag en" aria-label="English" />
    </div>
  );
};

export default LanguageSelector;
