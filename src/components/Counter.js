import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

const Counter = ({ index }) => {
  return (
    <Consumer>
      { context => {
        return (
          <div className="counter">
            <span className="counter-score">{ context.players[index].score }</span>
            <button className="counter-action increment left" onClick={ () => context.actions.changeScore(index, 1) }> +1 </button>
            <button className="counter-action increment" onClick={ () => context.actions.changeScore(index, 10) }> +10 </button>
            <button className="counter-action decrement left" onClick={ () => context.actions.changeScore(index, -1) }> -1 </button>
            <button className="counter-action decrement" onClick={ () => context.actions.changeScore(index, -10) }> -10 </button>
          </div>
        );
      }}
    </Consumer>
  );
}

Counter.propTypes = {
  index: PropTypes.number,
};

export default Counter;
