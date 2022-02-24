import { Component } from 'react'
import { Socket } from 'socket.io-client'

type PropT = {
  socket: Socket,
}

export default class BoardsCount extends Component<PropT, {boardsCount: number}> {
  constructor(props: PropT){
    super(props);
    this.state = {
      boardsCount: 0
    }
  }
  async componentDidMount(){
    const socket = this.props.socket;
    socket.on('new-boards-count', () => {;
      const newBoardsCount: number = this.state.boardsCount + 1;
      this.setState({
        boardsCount: newBoardsCount
      });
    });

    const url: string = 
    "https://" + (process.env.REACT_APP_API_URL || "localhost:4000") + "/boards/count";
    const res: Response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				"Accept": "application/json"
			},
		});
		const data = await res.json();
		this.setState({
			boardsCount: data,
		}); 
  }
  render() {
    return (
      <>
        <div>BoardsCount</div>
        <p>{this.state.boardsCount}</p>
      </>
    )
  }
}
