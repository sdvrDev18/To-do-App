import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./Home-style.css";
import BackgroundImage from "../../images/background-image-1.jpeg"

const backgroundStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'   
};

export default class Home extends Component {
  clicked() {
    alert("hi, i'm here");
  }
  render() {
    return (
      <div style={backgroundStyle}>
      <div>
        <Button className="Button-style" onClick={this.clicked}>
          boom !
        </Button>
      </div>
      </div>
    );
  }
}
