import React from 'react';

// PASSING STATE AS PROPS

function Count(props) {

    console.log("Count component rendered");

  return (
    <div className='dec_inc--number counter'>
      {/* <h1 className='dec_inc--number counter'>{incdec}</h1> */}
      <h1>{props.number}</h1>
    </div>
  );
}

export default Count;
