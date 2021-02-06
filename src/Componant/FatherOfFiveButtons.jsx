import React, { Component } from "react";
import FiveButtons from "./FiveButtons";

class FatherOfFiveButtons extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        {this.props.ButtonText.map((button) => (
          <FiveButtons
            clickedButtonId={this.props.clickedButtonId}
            id={button.id}
            buttonText={button}
            onclick={this.props.onclick}
            // class={this.props.class}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default FatherOfFiveButtons;
