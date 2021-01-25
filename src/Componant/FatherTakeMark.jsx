import React, { Component } from "react";
import TakeMark from "./TakeMark";

class FatherTakeMark extends Component {
  state = {
    text: [
      { id: 1, span: "Designers" },
      { id: 1, span: "Project Managers" },
      { id: 1, span: "Architectects" },
      { id: 1, span: "Executives" },
      { id: 1, span: "Students & Kids" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.text.map((Takemark) => (
          <TakeMark key={Takemark.id} text={Takemark} />
        ))}
      </React.Fragment>
    );
  }
}

export default FatherTakeMark;
