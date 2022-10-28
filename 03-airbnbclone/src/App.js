import './App.scss';
import Cards from './components/cards';
import HeroPage from './components/heropage';
import Navigationbar from './components/navbar';

function App() {
  return (
    <div className='app_container'>
      <Navigationbar />
      <HeroPage />
      <div className='card_container_all'>
        <Cards
          img='../assets/katie-zaferes.png'
          rating='5.0'
          reviewCount='(6)'
          country='USA'
          title='Life lessons with Katie Zaferes'
          price='$136'
        />

        <Cards
          img='../assets/wedding-photography.png'
          rating='5.0'
          reviewCount='(30)'
          country='USA'
          title='Learn wedding photography'
          price='$125'
        />

        <Cards
          img='../assets/mountain-bike.png'
          rating='4.8'
          reviewCount='(2)'
          country='USA'
          title='Group Mountain Biking '
          price='$50'
        />
      </div>
    </div>
  );
}

export default App;
