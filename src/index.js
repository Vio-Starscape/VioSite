import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

const matomoInstance = createInstance({
  urlBase: 'https://matomo.er-ic.ca/',
  siteId: process.env.NODE_ENV === 'production' ?  3 : 4,
  linkTracking: false, // optional, default value: true
  configurations: { // optional, default value: {}
    // any valid matomo configuration, all below are optional
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: 'POST'
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MatomoProvider value={matomoInstance}>
        <App />
    </MatomoProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endp oint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
