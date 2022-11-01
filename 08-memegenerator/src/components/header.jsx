import React from 'react';

function Header() {
  return (
    <div className='header_container'>
      <img className='meme_icon' src='./assets/memeicon.png' alt='logo' />
      <h1 className='header_title'>Meme Generator</h1>
      <p className='header_side--text'>React Course - Project 3</p>
    </div>
  );
}

export default Header;
