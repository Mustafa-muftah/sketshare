import React, { Component } from "react";
import Pic from "../Assets/Pics/Trademark.svg";

class TakeMark extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src={Pic} alt="" style={{ width: "10%" }} />
        <span>{this.props.text.span}</span>
      </React.Fragment>
    );
  }
}

export default TakeMark;
