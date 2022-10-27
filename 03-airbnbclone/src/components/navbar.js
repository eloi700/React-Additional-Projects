import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  return (
    <Navbar className='navbar_container'>
      <Navbar.Brand href='#' >
        <img className='navbar_logo_img' src='../assets/airbnb-logo.png' alt='airbnb logo' />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Navigationbar;
