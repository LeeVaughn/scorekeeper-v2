import React, { Component } from "react";

// import components
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm"

class App extends Component {
  // initializes a player state using a class property
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          // uses the spread operator to merge the initial objects in players state with the new array being created below
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

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
        <Header title="Scoreboard" players={ this.state.players } />
  
        {/* players list */}
        {/* iterates over array
        map takes a callback function that receives and processes each item in the array and returns a new array
        player represents the current item being processed */}
        { this.state.players.map( (player, index) =>
          <Player
            name={ player.name }
            score={ player.score }
            id = { player.id }
            key={ player.id.toString() }
            index={ index }
            changeScore={ this.handleScoreChange }
            removePlayer={ this.handleRemovePlayer }
          />
        )}

        <AddPlayerForm addPlayer={ this.handleAddPlayer } />
      </div>
    );    
  }
}

export default App;
