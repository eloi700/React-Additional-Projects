import React, { useState } from 'react';
import './App.scss';
import Count from './Count';

export default function App() {
  const [incdec, setIncdec] = useState(0);

  function increment() {
    setIncdec((prevNum) => prevNum + 1);
  }

  function decrement() {
    setIncdec((prevNum) => (prevNum !== 0 ? prevNum - 1 : 0));
  }

  function resetClick() {
    setIncdec((prevNum) => (prevNum = 0));
  }

  console.log('App component rendered');

  return (
    <div className='app_container'>
      <div className='state'>
        <h1 className='counter-heading'>COUNTER</h1>

        {/* PASSING STATE AS PROPS */}
        {/* <h1 className='dec_inc--number counter'>{incdec}</h1> */}

        <Count number={incdec} />

        {/* NOTE: Count doesn't depend on the above state component */}

        <div className='state--counter'>
          <button className='decrement' onClick={decrement}>
            -
          </button>
          <button className='increment' onClick={increment}>
            +
          </button>
        </div>
        <div className='reset_button'>
          <button className='reset' onClick={resetClick}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
