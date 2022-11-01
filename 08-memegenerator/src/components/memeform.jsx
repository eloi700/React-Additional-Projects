import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { memeData } from './memeData';

export default function MemeForm() {
  // const data = props.data;

  let url;
  
  function getMemeImage() {
    const memeArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randomNumber].url
  }

  return (
    <div className='form_container mx-5 my-5'>
      <Form className='d-flex justify-content-center align-items-center gap-5'>
        <Form.Control
          className='input_text-1'
          type='text'
          placeholder='Top Text'
        />
        <Form.Control
          className='input_text-2'
          type='text'
          placeholder='Bottom Text'
        />
      </Form>
      <div className='d-grid'>
        <Button
          onClick={getMemeImage}
          className='form_button my-4'
          variant='flat'
          type='submit'
        >
          Get a new meme image 🖼️
        </Button>
      </div>
    </div>
  );
}
