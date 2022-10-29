import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Joke from './components/joke';
import { getjokes } from './jokeData';

function App() {
  const jokeElements = getjokes.map(j => {
    return <Joke setup={j.setup} punchline = {j.punchline}/>
  })
  return (
    <div className='app_container'>
      {jokeElements}
    </div>
   );
}

export default App;