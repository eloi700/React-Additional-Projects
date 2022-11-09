import React, { useState } from 'react';
import Main from './components/main';
import NavigationBar from './components/navbar';
import './style.scss';

function App() {
  const [checked, setChecked] = useState(true);
  const [label, setLabel] = useState("Dark 🌙")

  function toggleMode(e) {
    e.stopPropagation()
    // const {checked} = e.target
    setChecked((prevMode) => !prevMode);
    setLabel((prevLabel) => prevLabel = "Light ☀")
  }

  return (
    <div className='app-container'>
      <NavigationBar checked={checked} label={label} toggleMode={toggleMode} />
      <Main checked={checked} />
    </div>
  );
}

export default App;
