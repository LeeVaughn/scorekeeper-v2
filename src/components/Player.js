import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

// import components
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  // defines propTypes inside of the class component
  static propTypes = {
    index: PropTypes.number,
    isHighScore: PropTypes.bool,
    isLowScore: PropTypes.bool
  };

  render() {
    // uses variable assignment for destructuring of props
    const { isHighScore, isLowScore, index } = this.props;

    return (
      <div className="player">
        <Consumer>
          { context => {
            return (
              <span className="player-name">
                <button className="remove-player" onClick={ () => context.actions.removePlayer(context.players[index].id) }>✖</button>

                <Icon isHighScore={ isHighScore } isLowScore={ isLowScore } />
                { context.players[index].name }
              </span>
            );
          }}
        </Consumer>
        
        <Counter index={ index } />
      </div>
    );
  }
}

export default Player;
