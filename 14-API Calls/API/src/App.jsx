import React, {useState, useEffect} from 'react'
import './App.scss';

function App() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)

  useEffect(()=> {
    console.log("effect ran");
      fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={()=> setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  );
}

export default App;

