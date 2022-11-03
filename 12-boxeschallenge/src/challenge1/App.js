import React, { useState } from 'react';
import '../App.scss';
import boxes from '../boxes';

function App(props) {
  const [box, setBox] = useState(boxes);

  const bgMode = {
    backgroundColor: props.darkMode ? '#000' : '#cccccc',
  };

  const boxElements = box.map((sq) => (
    <div className='cube' key={sq.id} style={bgMode}></div>
  ));

  return (
    <div className='app_container'>
      <div className='squares'>{boxElements}</div>
    </div>
  );
}

export default App;
