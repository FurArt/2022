import { Component } from "react";
import "./boxmonster.css"


const BoxMonster = (props) => {
    return (
      <div className="card-list">
       {props.children}
      </div>
    );
}
export default BoxMonster;
