import React, { useState } from 'react';
import image from './assets/johndoe.png';
import './App.scss';

function App() {

  const [contact, setContact] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'johndoe@example.com',
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? '★' : '✩';

  function toggleFavorite() {
    setContact((prevContact) => {//callback fn
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main className='app_container'>
      <article className='card_container'>
        <img
          className='card_image'
          src={image}
          alt='johndoe'
          style={{ height: '15rem', width: '15rem' }}
        />
        <div className='card_favorite-star' onClick={toggleFavorite}>
          {starIcon}
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
