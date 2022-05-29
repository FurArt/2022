import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      search:'',
      monster: [],
    };
    this.getRandom = function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(user=>{
      this.setState({
        monster:user
      })
    })
  }
  render() {
    const filteMonsterArray = this.state.monster.filter(
      (monsterFill)=>{
        
        return monsterFill.name.toLowerCase().includes(this.state.search)

      }
    );
    console.log('filteMonsterArray',filteMonsterArray)
    return (
      <div className='App'>
      <input className='search-box' type='search'onChange={(event)=>{
        this.setState({
          search : event.target.value.toLowerCase()
        })
        // this.state.monster.filter((monster)=>{
        //   if(monster.name.toLowerCase().includes()){
        //     this.setState({
        //       searchArray:monster
        //     })
        //   }
        // })
        }}/>
       
        {filteMonsterArray.map((ell) => {
          return <div key={ell.id}> <h1>{ell.name}</h1></div>;
        })}
      </div>
    );
  }
}

export default App;
