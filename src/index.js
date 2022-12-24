import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// #region import translation 
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import translation from "./translate/translation"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: translation,
    lng: localStorage.getItem("xx-l"),
    fallbackLng: "en"
  });
// #endregion

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
