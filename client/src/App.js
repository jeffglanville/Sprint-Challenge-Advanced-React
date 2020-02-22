import React from 'react';
import Players from './Players';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      players: []
    }
  }

  componentDidMount() {
    return(
      axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({players: res.data}))
      .catch(err => console.log(err))
    )
  }



  render() {
    return (
      <div className="App">
        <h1>Player Data</h1>
        <Players players={this.state.players}/>
      </div>
    );
  }
}

export default App;
