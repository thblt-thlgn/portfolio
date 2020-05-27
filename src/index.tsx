import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/home-page';
import * as serviceWorker from './config/service-worker';
import './config/i18n';
import './assets/styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback='loading...'>
      <HomePage />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
