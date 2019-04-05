import React from "react";

const Stats = (props) => {
  const totalPlayers = props.players.length;
  /**
   * iterates over each player in state to get the total number of points
   * @param (number) total - accumulator to add up the returned values
   * @param (object) player - current item from the array being processed
   */
  const totalPoints = props.players.reduce( (total, player) => {
    return total + player.score;
  }, 0);

  return(
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{ totalPlayers }</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{ totalPoints }</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;