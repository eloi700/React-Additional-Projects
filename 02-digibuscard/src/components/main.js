import React from 'react';
import Card from 'react-bootstrap/Card';

function Main() {
    return (
        <div className='main_text'>
        <Card.Title className='about'>About</Card.Title>
        <Card.Text className='about_para'>
            I am a frontend developer with a particualr interest in making things simple and automating daily tasks.  I try to keep up with security and best practices, and am looking for new things to learn.
          </Card.Text>
          <Card.Title className='interest'>Interests</Card.Title>
        <Card.Text className='interest_para'>
            Chef. Travel geek. Internet fanatic. Hiking. Nature lover. Tee fanatic.
          </Card.Text>
        </div>
     );
}

export default Main;