import React from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Joke from './components/joke';

function App() {
  return (
    <div className='app_container'>
      <Joke
        setup='I got my daughter a fridge for her birthday.'
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline='Scurvy.'
      />
      <Joke
        setup='Why do bees stay in the hive in the winter?'
        punchline='Swarm.'
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
      <Joke
        setup='How did the hacker escape the police.'
        punchline='He just ransonware.'
      />
    </div>
  );
}

export default App;
