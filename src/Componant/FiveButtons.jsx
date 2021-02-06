import React, { Component } from "react";
import "./FiveButtons.css";

class FiveButtons extends Component {
  state = {};

  render() {
    return (
      <div>
        <button
          className={
            this.props.id == this.props.clickedButtonId ? "clicked" : "button"
          }
          onClick={() => this.props.onclick(this.props.id)}
        >
          {this.props.buttonText.text}
        </button>
      </div>
    );
  }
}

export default FiveButtons;
