import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button className="btn text-center">{this.props.button}</button>
      </React.Fragment>
    );
  }
}

export default Button;
