import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FaGlobeEurope } from 'react-icons/fa';

function Header() {
  return (
    <Navbar className='justify-align-center' style={{ width: '100%' }}>
      <Navbar.Brand>
        {' '}
        <FaGlobeEurope style={{ height: '1.8rem', width: '1.8rem' }} /> my
        travel journal.
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
