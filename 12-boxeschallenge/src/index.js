import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './challenge1/App';
// import App from './challenge2/App-imperative';
// import App from './challenge2/App';
import App from './challenge3/App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  {/* <App darkMode={true}/> */}
  </React.StrictMode>
);