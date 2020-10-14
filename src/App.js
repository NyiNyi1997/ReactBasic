import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import Demo from "./demo";
import CardLList from "./components/card-list/card-list.components";
import "./components/card-list/card-list.styles.css";
import Search from "./components/search/search.component";
import EventBinding from "./components/event-binding/event-binding.components.js";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Demo name="ITVisionHub"></Demo>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      searchFields: "",
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ players: users }));
  }

  handleChange = (e) => {
    this.setState({ searchFields: e.target.value });
  };

  render() {
    // const players = this.state.players;
    // const searchFields = this.state.searchFields;
    const { players, searchFields } = this.state;
    const filterPlayers = players.filter((player) => {
      return player.name.toLowerCase().includes(searchFields.toLowerCase());
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Concreate React Basic</h1>
          {/* <EventBinding></EventBinding> */}
          <Search
            placeholder="Search Player"
            handleChange={this.handleChange}
          ></Search>
          <CardLList players={filterPlayers}></CardLList>
        </header>
      </div>
    );
  }
}
export default App;
