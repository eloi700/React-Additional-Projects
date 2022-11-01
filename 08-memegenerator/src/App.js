import './App.scss';
import MemeForm from './components/memeform';
import Header from './components/header';


function App() {

  const memeImage = memeData.map((data) => {
    return(
      <MemeForm
      key={data.id} data = {data}
      />
    )
  })

  return (
    <div className="app_container">
      <Header/>
      <div className='meme_photo_container'>{memeImage}</div>
    </div>
  );
}

export default App;
