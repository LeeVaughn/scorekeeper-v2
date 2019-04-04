import React from "react";

// import components
import Header from "./Header";
import Player from "./Player";

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  decrementScore = () => {
    this.setState( prevState => ({
        score: prevState.score - 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
      </div>
    );
  }
}

class App extends React.Component {
  // initializes a player state using a class property
  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        // produces a new array that no longer contains the player
        // p represents the current item being processed, returns all player objects in state except for the matching id
        players: prevState.players.filter( p => p.id !== id )        
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={ this.state.players.length } />
  
        {/* players list */}
        {/* iterates over array
        map takes a callback function that receives and processes each item in the array and returns a new array
        player represents the current item being processed */}
        { this.state.players.map( player =>
          <Player
            name={ player.name }
            id = { player.id }
            key={ player.id.toString() }
            removePlayer={ this.handleRemovePlayer }
          />
        )}
      </div>
    );    
  }
}

export default App;
