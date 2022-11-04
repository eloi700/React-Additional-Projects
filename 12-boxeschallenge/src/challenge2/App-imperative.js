import React, { useState } from 'react';
import '../App.scss';
import boxes from '../boxes';
import Box from './Box';

function App() {
  const [square, setSquare] = useState(boxes);

  function toggleBox(id) {
    setSquare((prevState) => {
      const newSquares = [];
      for (let i = 0; i < prevState.length; i++) {
        const currentSquare = prevState[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }

  const boxElements = square.map((sq) => (
    <Box key={sq.id} id={sq.id} on={sq.on} toggle={toggleBox} />
  ));

  return (
    <div className='app_container'>
      <div className='squares'>{boxElements} </div>
    </div>
  );
}

export default App;
