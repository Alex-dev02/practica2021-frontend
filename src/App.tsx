import './App.css';
import LastValue from './components/LastValue';
import Title from './components/Title';

import * as io from 'socket.io-client';


function App() {
  const socket: io.Socket = io.connect('ws://localhost:4000', { transports : ['websocket'] });
  return (
    <div>
      <div className='cards'>
        <div className='card'>
          <Title></Title>
          <LastValue socket={socket}></LastValue>
        </div>
      </div>
    </div>
  );
}

export default App;
