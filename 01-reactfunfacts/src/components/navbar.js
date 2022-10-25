import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';

function NavigationBar() {
  return (
    <Navbar className="navigationbar" bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home' className='logo-title'>
          <img alt='logo' src={logo} className='d-inline-block align-top logo' />
          <h1 className="logo-name">ReactFacts</h1>
        </Navbar.Brand>
        <Navbar.Brand>
          <h3 className='course-title'>React Course - Project1</h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
