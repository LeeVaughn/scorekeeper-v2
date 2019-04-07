import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    isRunning: false
  }

  handleStopwatch = () => {
    // toggles isRunning to the opposite of its current value
    this.setState({
      isRunning: !this.state.isRunning
    })
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={ this.handleStopwatch }>
          {/* button will display Stop if true, Start if false */}
          { this.state.isRunning ? "Stop" : "Start" }
        </button>
        <button>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
