import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {memeData} from '../memeData';

export default function MemeForm() {

  // const [memeImage, setMemeImage] = useState('https://i.imgflip.com/1bij.jpg');
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memeData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes; //data
    const randomNumber = Math.floor(Math.random() * memesArray.length); //random
    const url = memesArray[randomNumber].url
    setMeme(prevMeme =>({
     ...prevMeme,
      randomImage: url //OR
      // randomImage: memesArray[randomNumber].url
    }));
      // new Url from memesArray with an index of randomNumber
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
      <img className="meme_image" src={meme.randomImage} alt=""/>
    </div>
  );
}
