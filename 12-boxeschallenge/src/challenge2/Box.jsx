import React from 'react';

function Box(props) {
  const styles = {
    backgroundColor: props.on ? '#000' : 'transparent',
  };

  return (
    <div
      className='cube'
      style={styles}
      onClick={() => props.toggle(props.id)}
    ></div>
  );
}

export default Box;
