import './App.scss';
import Cards from './components/cards';
import HeroPage from './components/heropage';
import Navigationbar from './components/navbar';

function App() {
  return (
    <div className="app_container">
      <Navigationbar/>
      <HeroPage/>
      <Cards/>
    </div>
  );
}

export default App;
