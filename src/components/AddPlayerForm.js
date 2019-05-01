import React, { Component } from "react";
import { Consumer } from "./Context";

class AddPlayerForm extends Component {
  state = {
    value: ""
  }

  render() {
    return (
      <Consumer>
        { context => {
          const handleValueChange = (e) => {
            this.setState({ value: e.target.value });
          }

          const handleSubmit = (e) => {
            e.preventDefault();
            context.actions.addPlayer(this.state.value);
            this.setState({ value: ""});
          }

          return (
            <form onSubmit={ handleSubmit }>
              <input
                type="text"
                value={ this.state.value }
                onChange= { handleValueChange }
                placeholder="Enter a player's name"
              />

              <input
                type="submit"
                value="Add Player"
              />
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default AddPlayerForm;