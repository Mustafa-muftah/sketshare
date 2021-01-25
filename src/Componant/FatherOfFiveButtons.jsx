import React, { Component } from "react";
import FiveButtons from "./FiveButtons";

class FatherOfFiveButtons extends Component {
  state = {
    ButtonText: [
      { id: 1, text: "Audio Communication" },
      { id: 2, text: "Session recording" },
      { id: 3, text: "Share board with others" },
      { id: 4, text: "Variant tool kit" },
      { id: 5, text: "Different board grid styles and color" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.ButtonText.map((button) => (
          <FiveButtons id={button.id} buttonText={button} />
        ))}
      </React.Fragment>
    );
  }
}

export default FatherOfFiveButtons;
