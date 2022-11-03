import React from 'react';

function Header(props) {
  return (
    <header>
      <p>Current User: {props.userName}</p>
    </header>
  );
}

export default Header;
