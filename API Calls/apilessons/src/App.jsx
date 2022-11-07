import React, {useState} from 'react'
import './App.scss';

function App() {

  const [starWarsData, setStarWarsData] = useState({})
  // 1. GET  the data (fetch) or another tools like AXIOS
  // 2. SAVE the data to STATE

  // STARWARS API in RENDER AREA
  fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    // .then(data => setStarWarsData(data))
    .then(data => console.log(data))

  //SIDE EFFECTS IN REACT --------------
  // Any react out of reach / anything that React isn't in charge of
  //     Examples:
  //     localStorage,
  //     API / database interactions
  //     Subscriptions (e.g. web sockets)
  //     Syncing 2 different internal states together

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
