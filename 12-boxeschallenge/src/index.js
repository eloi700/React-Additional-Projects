import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './challenge1/App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App darkMode={false}/>
  </React.StrictMode>
);