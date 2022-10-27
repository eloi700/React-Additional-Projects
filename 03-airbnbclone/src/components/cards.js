import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const images = {
    img1: '../assets/katie-zaferes.png',
    img2: '../assets/wedding-photography.png',
    img3: '../assets/mountain-bike.png'
}
function Cards() {
  return (
    <Row xs={1} md={2} className='g-3'>
        <Col>
          <Card>
            <Card.Img variant='top' src='../assets/katie-zaferes.png' />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default Cards;
