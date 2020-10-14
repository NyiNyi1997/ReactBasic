import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, Nyi Nyi Aung",
    };
  }

  handleClick = () => {
    this.setState({ message: "Hey What's Up Bro " });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.handleClick}>Click to Change message</button>
      </div>
    );
  }
}

export default EventBinding;
