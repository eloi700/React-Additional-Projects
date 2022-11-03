import React, { useState } from 'react';
import image from './assets/janesmith.png';
import Star from './star';
import './App.scss';

function App() {
  const [contact, setContact] = useState({
    firstName: 'Jane',
    lastName: 'Smith',
    phone: '+993 4 8518197',
    email: 'janesmith@example.com',
    isLike: false,
  });

  function toggleLike() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isLike: !prevContact.isLike,
      };
    });
  }

  return (
    <main className='app_container'>
      <article className='card_container'>
        <img
          className='card_image'
          src={image}
          alt='janesmith'
          style={{ height: '15rem', width: '15rem' }}
        />

        {/* <div className='card_favorite-star' onClick={toggleLike}>
          {likeIcon}
        </div> */}

        <div className='card_favorite-star'>
          <Star isFilled={contact.isLike} handleClick={toggleLike}/>
        </div>

        <h2 className='card_name'>
          {contact.firstName} {contact.lastName}
        </h2>
        <p className='card_phone contact'>{contact.phone}</p>
        <p className='card_email contact'>{contact.email}</p>
      </article>
    </main>
  );
}

export default App;
