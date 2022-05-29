import React, { Component } from "react";
import CardList from "./CardList.js";
// import { robots } from './robots';
import SearchBox from "./SearchBox.js";
import "./App.css";
import ScrollList from "./ScrollList.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      SearchField: "",
    };
  }

  componentDidMount() {
    //USE PROMISE :
    //First version
    // fetch(' https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState(
    //   {robots:users}
    // ))
    // .catch(err=>console.log);
    //Second version
    let selfApp = this;
    const loadDAta = async function () {
      let robots = await (
        await fetch(" https://jsonplaceholder.typicode.com/users")
      ).json();
      selfApp.setState({ robots: robots });
    };
    loadDAta();
    // console.log(this.state.robots);
    // this.setState({
    //   robots: robots
    // })
  }

  onSearchChange = (event) => {
    this.setState({
      SearchField: event.target.value,
    });
  };
  render() {
    const filterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.SearchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading, please wait</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Robot family</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <ScrollList>
            <CardList robots={filterRobots} />
          </ScrollList>
        </div>
      );
    }
  }
}

export default App;
