import React from 'react';

function Circle(props) {

  const styles = {
    backgroundColor: props.on ? '#fab2ff' : 'transparent',
    borderColor: props.on ? '#000' : 'blue',
  };

  return (
    <div
      className='circle'
      style={styles}
      onClick={() => props.toggle(props.id)}
      // the toggle event is in App.js passing it thru props(id)
    ></div>
  );
}

export default Circle;
