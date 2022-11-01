import './App.scss';

function App() {

  function handleClick(){
    console.log("I was clicked.");
  }

  function handleMouseOver(){
    console.log("I hover the image.");
  }

  return (
    <div className='app_container'>
      <img onMouseOver={handleMouseOver} className='image' src='https://source.unsplash.com/VowIFDxogG4' alt='nature' />
      <div className='d-grid'>
        <button className='click_button' onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
