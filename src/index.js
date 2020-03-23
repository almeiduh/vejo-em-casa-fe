import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'state/store';

import Header from 'components/Header/Header';

import 'styles/tailwind.css';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <>
          <Header />
          <App />
        </>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
