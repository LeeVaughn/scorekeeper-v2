import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  }

  // starts a timer to call the tick function
  componentDidMount() {
    this.intervalID = setInterval( () => this.tick(), 100);
  }

  // when isRunning is true, updates elapseTime using the difference between previousTime and now and updates previousTime
  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  }

  handleStopwatch = () => {
    // toggles isRunning to the opposite of its current value
    this.setState( prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
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
