import React, { Component } from "react";

// initializes a new Context using createContext method
const ScoreboardContext = React.createContext();

export class Provider extends Component {
  // initializes a player state using a class property
  state = {
    players: [
      {
        name: "Lou",
        score: 0,
        id: 1
      },
      {
        name: "David",
        score: 0,
        id: 2
      },
      {
        name: "Dawn",
        score: 0,
        id: 3
      },
      {
        name: "Lee",
        score: 0,
        id: 4
      }
    ]
  };

// player id counter
prevPlayerId = 4;

getHighScore = () => {
  const scores = this.state.players.map( p => p.score );
  // returns the largest score
  const highScore = Math.max(...scores);
  if (highScore) {
    return highScore;
  } 
  return null;
}

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
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions: {
          getHighScore: this.getHighScore,
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer
        }
      }}>
        { this.props.children }
      </ScoreboardContext.Provider>
    );
  }
}
export const Consumer = ScoreboardContext.Consumer;
