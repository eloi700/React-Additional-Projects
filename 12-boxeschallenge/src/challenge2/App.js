import React, { useState } from 'react';
import '../App.scss';
import boxes from '../boxes';
import Box from './Box';

function App() {
  const [square, setSquare] = useState(boxes);

//   TYPICAL EXAMPLE OF MAP() IN REACT TO UNDERSTAND
//   const numbers = [1, 2, 3, 4, 5];
//   const doubled = numbers.map((number) => number * 2); //print DOWN

  function toggleBox(id) {
    setSquare((prevSquares) => {
      return prevSquares.map((sqr) => {
        return sqr.id === id ? { ...sqr, on: !sqr.on } : sqr;
      });
    });
  }

  const boxElements = square.map((sq) => (
    <Box key={sq.id} id={sq.id} on={sq.on} toggle={toggleBox} />
  ));

  return (
    <div className='app_container'>
      <div className='squares'>{boxElements} </div>
      {/* <div className="doubled">{doubled}</div> */}
    </div>
  );
}

export default App;
