import React, {useState} from 'react';
import './App.scss';

function App() {
    const [thingsArray, setthingsArray] = useState(["Thing 1", "Thing 2"]);

    const thingElements = thingsArray.map(thing => <li key={thing}>{thing}</li> )

    function addItem(){
        setthingsArray((prevArray) =>{
          return [...prevArray, `Thing ${prevArray.length + 1}`]
      })
    }

    return (
        <div className='d-grid justify-content-center' style={{height: "50rem", width: "50rem", backgroundColor: "lightgreen" }}>
        <button className='add_item_button' onClick={addItem}>
          Add Item
        </button>
        {thingElements}
      </div>
     );
}

export default App;

