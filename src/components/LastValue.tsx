import React, { Component } from 'react';

import * as io from 'socket.io-client';


export class LastValue extends Component<{}, {value: string, board: string}> {
	constructor(props: any){
		super(props);
		this.state = {
			value: "",
			board: ""
		}
	}

	async componentDidMount(){
		const socket = io.connect('ws://localhost:4000', { transports : ['websocket'] });
		socket.on('new-tvalue', (tvalue) => {
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
		}) 
	}

	render() {
		const value: string = this.state.value;
		const board: string = this.state.board;
		return (
			<p className='lastValue'>
				{value} from board- 
				{board}
			</p>
		);
	}
}

export default LastValue;
