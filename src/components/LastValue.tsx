import { Component } from 'react';
import { Socket } from 'socket.io-client';

type TValue = {
  value: string;
  board: string;
};

type PropT = {
  socket: Socket,
}

export class LastValue extends Component<PropT, TValue> {
  constructor(props: PropT){
		super(props);
		this.state = {
			value: "",
			board: ""
		}
	}

	async componentDidMount(){
    const socket = this.props.socket;
		socket.on('new-tvalue', (tvalue: TValue) => {
      this.setState({
        value: tvalue.value,
        board: tvalue.board
      });
		});

		const url: string = 
    process.env.REACT_APP_API_URL ?
    "https://" + process.env.REACT_APP_API_URL + "/tvalues/last" :
    "http://localhost:4000" + "/tvalues/last";
		const res: Response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				"Accept": "application/json"
			},
		});
		const data = await res.json();
		this.setState({
			value: data.value,
			board: data.board.boardId
		}); 
	}

	render() {
		const tvalue: TValue = {
      value: this.state.value,
      board: this.state.board
    }
		return (
			<p className='lastValue'>
				{tvalue.value} from board- 
				{tvalue.board}
			</p>
		);
	}
}

export default LastValue;
