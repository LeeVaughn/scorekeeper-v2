import React, { Component } from "react";

// import components
import { Consumer } from "./Context";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm"
import Ticker from "./Ticker"

class App extends Component {
  render() {
    return (
      <Consumer>
        { context => {
          const highScore = context.actions.getHighScore();
          const lowScore = context.actions.getLowScore();
          return (
            <div className="scoreboard">
              <Header title="Scoreboard" />
        
              {/* players list */}
              {/* iterates over array
              map takes a callback function that receives and processes each item in the array and returns a new array
              player represents the current item being processed */}
              { context.players.map( (player, index) =>
                <Player
                  name={ player.name }
                  score={ player.score }
                  id = { player.id }
                  key={ player.id.toString() }
                  index={ index }
                  changeScore={ context.actions.handleScoreChange }
                  removePlayer={ context.actions.handleRemovePlayer }
                  // checks to see if player's score is equal to high score
                  isHighScore={ highScore === player.score}
                  // checks to see if player's score is equal to low score
                  isLowScore={ lowScore === player.score}
                />
              )}

              <AddPlayerForm addPlayer={ context.actions.handleAddPlayer } />
              <Ticker />
            </div>
          );
        }}
      </Consumer>
    );    
  }
}

export default App;
