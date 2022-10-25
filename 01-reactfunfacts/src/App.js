import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import NavigationBar from './components/navbar';
import './style.css'

function App() {
  return (
    <div className='app-container'>
      <NavigationBar/>
      <Main/>
    </div>
  );
}

export default App;
