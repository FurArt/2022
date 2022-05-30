import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import SearchBox from "./component/input/searchinput";
import BoxMonster from "./component/container/boxmonster";
import Cardlist from "./component/itemlist/cardlist"
class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      monster: [],
    };
    
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          monster: user,
        });
      });
  }
  searchOn = (event) => {
    this.setState({
      search: event.target.value.toLowerCase(),
    });
  };
  render() {
    const filteMonsterArray = this.state.monster.filter((monsterFill) => {
      return monsterFill.name.toLowerCase().includes(this.state.search);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className="SearchBox-input"
          searchHandler={this.searchOn}
          placeholder="Search monster"
        />
        <BoxMonster >
          <Cardlist user={filteMonsterArray} />
        </BoxMonster>
      </div>
    );
  }
}

export default App;
