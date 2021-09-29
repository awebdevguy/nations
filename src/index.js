import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'normalize.css'
import App from './App';
import { CountryProvider } from './components/CountryContext'
import reportWebVitals from './reportWebVitals';

/** Wrap the App inside the CountryContext for global access of state. */
ReactDOM.render(
  <React.StrictMode>
    <CountryProvider>     
      <App />
    </CountryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
