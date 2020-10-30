import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./Home-style.css";

export default class Home extends Component {
  clicked() {
    alert("hi, i'm here");
  }
  render() {
    return (
      <div>
        <Button className="Button-style" onClick={this.clicked}>
          boom !
        </Button>
      </div>
    );
  }
}
