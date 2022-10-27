import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function Joke({ setup, punchline }) {
  return (
    <div className='joke_accordion'>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='1' >
          <Accordion.Header className='acc_head' >{setup}</Accordion.Header>
          <Accordion.Body className='acc_body'> {punchline}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
