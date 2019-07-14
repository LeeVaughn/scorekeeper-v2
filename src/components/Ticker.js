import React, { Component } from "react";
import { Consumer } from "./Context";

class Ticker extends Component {
  state = {
    value: ""
  }

  render() {
    return (
      <Consumer>
        { context => {
          // will be used to handle changes to scores
          const handleRecentChange = {}

          return (
            <footer>
              <p>DAVID: +1, DAVID: +10, LEE: +1, LEE: +1, DAWN: +1</p>
            </footer>
          );
        }}
      </Consumer>
    );
  }
}

export default Ticker;
