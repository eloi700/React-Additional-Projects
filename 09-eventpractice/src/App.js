import './App.scss';

function App() {
  const thingsArray = ['Thing1', 'Thing2', 'Thing3'];
  const thingElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  function addItem(){
    const newThingText = `Thing${thingsArray.length + 1}`
    thingsArray.push(newThingText);
    console.log(thingsArray);
  }

  function handleClick() {
    console.log('I was clicked.');
  }

  function handleMouseOver() {
    console.log('I hover the image.');
  }

  return (
    <div className='app_container'>
      <img
        onMouseOver={handleMouseOver}
        className='image'
        src='https://source.unsplash.com/VowIFDxogG4'
        alt='nature'
      />
      <div className='d-grid'>
        <button className='click_button' onClick={handleClick}>
          Click Me
        </button>
      </div>
      <div className='d-grid'>
        <button className='add_item_button' onClick={addItem}>
          Add Item
        </button>
        {thingElements}
      </div>
    </div>
  );
}

export default App;
