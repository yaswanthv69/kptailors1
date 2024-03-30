import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure that index.css exists in the same directory
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

