import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState, useEffect } from "react";
import SearchBox from "./component/input/searchinput";
import BoxMonster from "./component/container/boxmonster";
import Cardlist from "./component/itemlist/cardlist";

const App = () => {
  const [fetchField, setfetchField] = useState([]);
  const [filterField, setfilterField] = useState(fetchField);
  const [searchField, setsearchField] = useState(""); //[value, setState]


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => {
        setfetchField(user);
      });
  }, []);

  
  useEffect(()=>{
    const filteMonsterArray = fetchField.filter((monsterFill) => {
      return monsterFill.name.toLowerCase().includes(searchField);
    });
    setfilterField(filteMonsterArray);
  }, [fetchField, searchField])

  function searchOn(event) {
    let inputValue = event.target.value.toLowerCase();
    setsearchField(inputValue);
  }

  

  console.log("fetchField: ", fetchField);
  console.log("filteMonsterArray: ", filterField);

  return (
    <div>
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="SearchBox-input"
        searchHandler={searchOn}
        placeholder="Search monster"
      />
      <BoxMonster>
        <Cardlist user={filterField} />
      </BoxMonster>
    </div>
  );
};

export default App;
