import React, { Component } from "react";
import "./HeaderCenter.css";

class HeaderCenter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3>{this.props.header.text}</h3>
      </React.Fragment>
    );
  }
}

export default HeaderCenter;
