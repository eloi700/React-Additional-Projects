import React, { useState } from 'react';
import circles from '../circles';
import Circle from './Circle';
import '../App3.scss';

function App() {
  const [round, setCircles] = useState(circles);

  function toggleCircle(id) {
    // onClick event is still in Circle
    setCircles((prevCircle) => {
      return prevCircle.map((circle) => {
        return circle.id === id ? { ...circle, on: !circle.on } : circle;
      });
    });
  }

  const circleElements = round.map((c) => (
    <Circle key={c.id} id={c.id} on={c.on} toggle={toggleCircle} />
  ));

  return (
    <main className='app_container'>
      <div className='circles_container'>{circleElements} </div>
    </main>
  );
}

export default App;
