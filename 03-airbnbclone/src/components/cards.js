import React from 'react';
import Card from 'react-bootstrap/Card';

function Cards({ img, rating, reviewCount, country, title, price }) {
  return (
      <Card className='card_container'>
        <Card.Img className='image' variant='top' src={img} />
        <Card.Body className='text'>
          <img className='star' src='../assets/star.png' alt='star' />
          <span>
            <b>{rating}</b>
          </span>
          <span style={{ color: '#918E9b' }}> {reviewCount} </span>
          <span style={{ color: '#918E9b' }}> • {country}</span>
          <p>
            {title}
            <br />
            <b>From {price}</b> <span>/ person</span>
          </p>
        </Card.Body>
      </Card>
  );
}

export default Cards;
