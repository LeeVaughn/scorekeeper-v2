import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// import components
import Counter from "./Counter";

class Player extends PureComponent {
  // defines propTypes inside of the class component
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

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
          index={ index }
          changeScore={ changeScore }
        />
      </div>
    );
  }
}

export default Player;
