import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

// import components
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  // defines propTypes inside of the class component
  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  };

  render() {
    // uses variable assignment for destructuring of props
    const { id, isHighScore, name, score, index } = this.props;

    return (
      <div className="player">
        <Consumer>
          { context => {
            return (
              <span className="player-name">
                <button className="remove-player" onClick={ () => context.actions.removePlayer(id) }>✖</button>

                <Icon isHighScore={ isHighScore } />
                { name }
              </span>
            );
          }}
        </Consumer>
        
        <Counter
          score={ score }
          index={ index }
        />
      </div>
    );
  }
}

export default Player;
