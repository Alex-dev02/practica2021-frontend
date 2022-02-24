import './App.css';
import LastValue from './components/LastValue';

import * as io from 'socket.io-client';
import BoardsCount from './components/BoardsCount';

function App() {
  const socket: io.Socket = io.connect(
    (process.env.REACT_APP_ENV === 'PROD' ? 'wss://' : 'ws://') + (process.env.REACT_APP_API_URL || "localhost:4000"),
    { transports : ['websocket'] }
  );
  return (
    <div>
      <div className='cards'>
        <div className='card'>
          The last added value
          <LastValue socket={socket}></LastValue>
        </div>
        <div className='card'>
          <BoardsCount socket={socket}></BoardsCount>
        </div>
      </div>
    </div>
  );
}

export default App;
