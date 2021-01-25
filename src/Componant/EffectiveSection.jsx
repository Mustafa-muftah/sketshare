import React, { Component } from "react";
import "./EffectiveSection.css";
import FatherOfFiveButtons from "./FatherOfFiveButtons";
import Button from "./Button";

class EffectiveSection extends Component {
  state = {
    Button: {
      id: 1,
      text: ` Discover More `,
    },
  };
  render() {
    return (
      <React.Fragment>
        <div className="content-three">
          <div className="text">
            <h2>Effective, yet Simple</h2>
            <p>
              Built with productivity at heart and creativity at mind to help
              you and your team have all you need to get a powerful and smooth
              brainstorming experience
            </p>
          </div>
          <div className="row">
            <div className="col">
              <h3>Missing Content</h3>
            </div>
            <div className="col">
              <FatherOfFiveButtons />
              <p>and much more</p>
              <div className="center-block text-center m-4">
                <Button key={this.state.Button.id} button={this.state.Button} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EffectiveSection;
