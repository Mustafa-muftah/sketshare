import React, { Component } from "react";
import "./BlueBackground.css";
import img from "../Assets/Pics/blueBackground.png";

class BlueBackground extends Component {
  state = {};
  render() {
    return (
      <div
        className="contentFour"
        style={{
          backgroundImage: `url(${img})`,
          width: "auto",
        }}
      >
        <p>
          Bring your Remote <br></br>Team on one Board
        </p>
        <h4>
          Teams from <br></br>
          <strong>155+ Countries</strong>
          <br></br> are using Sketshare
        </h4>
      </div>
    );
  }
}

export default BlueBackground;
