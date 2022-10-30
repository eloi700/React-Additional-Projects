import './App.scss';
import Cards from './components/cards';
import HeroPage from './components/heropage';
import Navigationbar from './components/navbar';
import { data } from './components/airbnbdata';

function App() {
  const cards = data.map((item) => {
    return (
      <Cards
        key={item.id}
        item = {item} //OR
        // {...item} and remove all item in the props.item ...(card.js)
      />
    );
  });
  return (
    <div className='app_container'>
      <Navigationbar />
      <HeroPage />
      <div className='card_container_all'>{cards}</div>
    </div>
  );
}

export default App;
