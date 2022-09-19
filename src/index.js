import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import en from "./localization/en/en.json";
import es from "./localization/es/es.json";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
 .use(initReactI18next)
 .use(LanguageDetector)
 .init({
  interpolation: {escapeValue: false},
  lng: "en",
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      localization: en,
    },
    es: {
      localization: es,
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>    
        <App />
    </React.StrictMode>
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
