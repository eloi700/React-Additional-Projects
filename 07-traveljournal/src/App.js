import './styles/App.scss';
import Header from './components/navbar';
import MainContent from './components/main';
import { travelData } from './data';

function App() {
  const content = travelData.map((i) => {
    return <MainContent key={i.id} item={i} />;
  });
  return (
    <div className='app_container'>
      <Header />
      <div className='content_container'>{content}</div>
    </div>
  );
}

export default App;
