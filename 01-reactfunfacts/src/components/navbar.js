import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo-small.svg';

function NavigationBar(props) {
  return (
    <Navbar className={props.checked ? 'nav-dark navigationbar ' : 'nav-light navigationbar'}>
      <Container>
        <Navbar.Brand href='#home' className='logo-title'>
          <img
            alt='logo'
            src={logo}
            className='d-inline-block align-top logo'
          />
          <h1 className='logo-name'>ReactFacts</h1>
        </Navbar.Brand>
        <div className='mode'>
          <input
            type='checkbox'
            id='toggle-button'
            className='input-button'
            checked={props.checked}
            onChange={props.toggleMode}
          />
          <label htmlFor='toggle-button' className='input-label'>
            {props.label}
          </label>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
