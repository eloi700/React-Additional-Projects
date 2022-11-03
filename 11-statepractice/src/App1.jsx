import React, { useState } from 'react';
import './App.scss';

export default function App() {
  const [important, setImportant] = useState('Yes');
  const [incdec, setIncdec] = useState(0);
  const [isGoingOut, setIsGoingOut] = useState(true);
  // ---------------------
  // const isGoingOut = true;
  // let answer = isGoingOut === true ? "Yes" : "No" //OR
  // let answer = isGoingOut ? 'Yes' : 'No'; //OR check down
  let impState = important ? 'Yes' : 'No';

  function goingOutClick() {
    setIsGoingOut((prevAnswer) => !prevAnswer);
  }

  function handleClick() {
    setImportant((prevState) => !prevState);
  }

  function increment() {
    setIncdec((prevNum) => prevNum + 1);
  }

  function decrement() {
    setIncdec((prevNum) => (prevNum !== 0 ? prevNum - 1 : 0));
  }

  function resetClick(){
    setIncdec(prevNum => prevNum = 0)
  }

  return (
    <div className='app_container'>
      <div className='state'>
        <h1 className='state--title'>Is state important to know?</h1>
        <div className='state--value' onClick={handleClick}>
          <h1>{impState}</h1>
          <h1 className='dec_inc--number'>{incdec}</h1>
        </div>
        <div className='state--counter'>
          <button className='decrement' onClick={decrement}>
            -
          </button>
          <button className='increment' onClick={increment}>
            +
          </button>
        </div>
        <div className="reset_button">
          <button className="reset" onClick={resetClick}>Reset</button>
        </div>
      </div>

      {/* IS GOING OUT - TERNARY OPERATOR */}
      <div className='state_going'>
        <h1 className='state_going-title'>Do I feel like going out?</h1>
        <div className='state_going-value' onClick={goingOutClick}>
          <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
          {/* <h1>{answer}</h1> */}
        </div>
      </div>
    </div>
  );
}

/*
 CHANGING STATE QUIZ:
1)  YOU HAVE 2 OPTIONS FOR WHAT YOU CAN PASS INTO A STATE SETTER FUNCTION (e.g. `setCount`). WHAT ARE THEY?
    a.) New Value of State (setCount(5))
    b.) Callback Function - whatever the callback function returns === new value of state.

2)  WHEN WOULD YOU WANT TO PASS THE FIRST OPTION (FROM ANSWER ABOVE) TO THE STATE SETTER FUNCTION?
    Whenever you don't need the previous value of state to determine what the new value of state should be.


3)  WHEN WOULD YOU WANT TO PASS SECOND OPTION (FROM ANSWER ABOVE) TO THE STATE SETTER FUNCTION?
    Whenever you DO need the previous value to determine the new value. */
