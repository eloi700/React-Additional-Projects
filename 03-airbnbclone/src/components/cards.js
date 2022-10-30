import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function Cards(props) {
  const cardItem = props.item;

  let badgeText;
  if (cardItem.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (cardItem.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <Card className='card_container'>
      {badgeText && (
        <div>
          <Badge bg='warning'>{badgeText}</Badge>{' '}
        </div>
      )}
      {/* ===OR {!openSpots && ...} */}

      <Card.Img
        className='image'
        variant='top'
        src={`../assets/${cardItem.coverImg}`}
      />
      <Card.Body className='text'>
        <img className='star' src='../assets/star.png' alt='star' />
        <span>
          <b>{cardItem.stats.rating}</b>
        </span>
        <span style={{ color: '#918E9b' }}> {cardItem.stats.reviewCount} </span>
        <span style={{ color: '#918E9b' }}> • {cardItem.location}</span>
        <p>
          {cardItem.title}
          <br />
          <b>From {cardItem.price}</b> <span>/ person</span>
        </p>
      </Card.Body>
    </Card>
  );
}

export default Cards;
