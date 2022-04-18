import React, {Component} from "react";
import CardList from './CardList.js'
import { robots } from './robots';
import SearchBox from './SearchBox.js'
import './App.css'


class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: robots,
      SearchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({
      SearchField: event.target.value
    })
  }
  render(){ 
    const filterRobots = this.state.robots.filter( robots => {
      return robots.name.toLowerCase()
      .includes(this.state.SearchField
      .toLowerCase())
    })
    return (
      <div className="tc">
        <h1>Robot family</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList robots={filterRobots} />
      </div>
      )
  }
}

export default App;
