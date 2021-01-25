import React, { Component } from "react";
import "./FiveButtons.css";

class FiveButtons extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="button">{this.props.buttonText.text}</button>
      </div>
    );
  }
}

export default FiveButtons;
