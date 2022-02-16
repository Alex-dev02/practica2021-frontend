import React, { Component } from 'react';
import * as io from 'socket.io-client'

type TValue = {
  value: string;
  board: string;
};

export class LastValue extends Component<{socket: io.Socket}, TValue> {
	constructor(props: any){
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
        board: data.boardId
      })
		});

		const url: string = "http://localhost:4000/tvalues/last";
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
			board: data.boardId
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
