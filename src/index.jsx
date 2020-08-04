import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);