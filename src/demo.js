import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ players: users }));
  }

  render() {
    return (
      <span>
        {this.state.players.map((player) => (
          <h3 key={player.id}>{player.name}</h3>
        ))}
      </span>
    );
  }
}
export default Demo;
