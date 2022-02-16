import './App.css';
import LastValue from './components/LastValue';
import Title from './components/Title';

function App() {
  return (
    <div>
      <div className='cards'>
        <div className='card'>
          <Title></Title>
          <LastValue></LastValue>
        </div>
        <div className='card'>
          <span>graph:</span>
        </div>
      </div>
    </div>
  );
}

export default App;
