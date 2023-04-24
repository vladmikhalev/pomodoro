import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

