// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@picocss/pico/css/pico.min.css'; // Import Pico.css

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
