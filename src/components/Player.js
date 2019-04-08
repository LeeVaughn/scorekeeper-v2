import React, { PureComponent } from "react";

// import components
import Counter from "./Counter";

class Player extends PureComponent {
  render() {
    // uses variable assignment for destructuring of props
    const { name, score, id, index, changeScore, removePlayer } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => removePlayer(id) }>✖</button>
          { name }
        </span>
        
        <Counter
          score={ score }
          changeScore={ changeScore }
          index={ index }
        />
      </div>
    );
  }
}

export default Player;
