import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./localization/blog/en/en.json";
import es from "./localization/blog/es/es.json";
import en2 from "./localization/signup/en/en.json";
import es2 from "./localization/signup/es/es.json";
import en3 from "./localization/login/en/en.json";
import es3 from "./localization/login/es/es.json";
import en4 from "./localization/header/en/en.json";
import es4 from "./localization/header/es/es.json";



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
      blog: en,
      signup: en2,
      login: en3,
      header: en4,
    },
    es: {
      blog: es,
      signup: es2,
      login: es3,
      header: es4,
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
