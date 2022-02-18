import './App.css';
import LastValue from './components/LastValue';

import * as io from 'socket.io-client';

function App() {
  const socket: io.Socket = io.connect(
    'ws://' + (process.env.REACT_APP_API_URL || "localhost:4000"),
    { transports : ['websocket'] }
  );
  return (
    <div>
      <div className='cards'>
        <div className='card'>
          The last added value
          <LastValue socket={socket}></LastValue>
        </div>
      </div>
    </div>
  );
}

export default App;
