import React from 'react';
import Joke from './Joke';
import getjokes from '../jokeData';
import '../App.scss'

function App() {

  const jokeElements = getjokes.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <div className="app-container">
        {jokeElements}
    </div>
  )
}

export default App;
