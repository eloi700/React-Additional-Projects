import React from 'react';
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer_card'>
        <FaTwitterSquare />
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaGithubSquare />
    </div>
  );
}

export default Footer;
