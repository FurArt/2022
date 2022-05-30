import { Component } from "react";
import "./boxmonster.css"
class BoxMonster extends Component {
  render() {
    console.log("BoxMonster", this.props.children);
    return (
      <div className="card-list">
       {this.props.children}
      </div>
    );
  }
}
export default BoxMonster;
