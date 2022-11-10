import React from 'react';

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#8a64d6' : '#fff',
  };

  return (
    <div
        className='die-face'
        style={styles}
        onClick={props.holdDice}
    >
      <div className='die-num'>{props.value}</div>
    </div>
  );
}

export default Die;
