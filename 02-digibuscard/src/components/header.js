import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { TfiEmail } from 'react-icons/tfi';
import { BsLinkedin } from 'react-icons/bs';
import image from '../meidpic.png';

function Header() {
  return (
    <>
      <div className='header_card'>
        <Card.Img variant='top' className="img_pic" src={image} />
        <Card.Body>
          <Card.Title className="header_name">Cielo Tennert</Card.Title>
          <Card.Subtitle className='header_name--sub'>
            Frontend Developer
          </Card.Subtitle>
          <Card.Link className="header_email" href='#'>cielotennert@web.de</Card.Link>
          <div className='link_button'>
            <Button size='sm' variant='light' className="button_email">
              <TfiEmail />{'   '}
              Email
            </Button>
            <Button size='sm' variant='primary' className="button_linkedin">
              <BsLinkedin />{'   '}
              LinkedIn
            </Button>
          </div>
        </Card.Body>
      </div>
    </>
  );
}

export default Header;
