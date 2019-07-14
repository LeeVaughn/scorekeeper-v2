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
            {/* elements to display recent score changes will go here */}
          );
        }}
      </Consumer>
    );
  }
}

export default Ticker;
