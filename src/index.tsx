import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from './common/theme';
import Router from './layouts/Router';
import reportWebVitals from './reportWebVitals';

const App = (): JSX.Element => {
  return (
    <BrowserRouter basename="/">
      <Theme>
        <Router />
      </Theme>
    </BrowserRouter>
  )
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
