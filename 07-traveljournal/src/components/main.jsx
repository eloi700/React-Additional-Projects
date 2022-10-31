import React from 'react';
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { HiLocationMarker } from 'react-icons/hi';

function MainContent(props) {
  const info = props.item;
  return (
    // <CardGroup>
      <Card>
        <Card.Img className="image" variant='top' src={info.imageUrl} />
        <Card.Body>
          <div className='location'>
            <HiLocationMarker className='location--marker'/> {info.location}
            <span className='location--link'>
              <a href={info.googleMapsUrl}> View on Google Maps</a>
            </span>
          </div>
          <Card.Title>{info.title}</Card.Title>
          <p className='dates'>
            {info.startDate} - {info.endDate}
          </p>
          <Card.Text>{info.description}</Card.Text>
        </Card.Body>
      </Card>
    // </CardGroup>

  );
}

export default MainContent;
