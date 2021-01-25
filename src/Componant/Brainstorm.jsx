import React, { Component } from "react";
import "./Brainstorm.css";
import Pic from "../Assets/Pics/Interactive.svg";
import HeaderCenter from "./HeaderCenter";
import Paragraph from "./Paragraph";
import Button from "./Button";

class Brainstorm extends Component {
  state = {
    Header: {
      id: 1,
      text: ` Brainstorm Smarter.  Faster. Together. `,
    },
    Paragraph: {
      id: 1,
      text: `  Sketchshare help users to brainstorm and transfer thier ideas
      through voice , video , shapes , color and grid on one
      board `,
    },
    Button: {
      id: 1,
      text: ` Create board , Free `,
    },
  };
  render() {
    return (
      <React.Fragment>
        <div className="contentOne">
          <HeaderCenter key={this.state.Header.id} header={this.state.Header} />
          <Paragraph
            key={this.state.Paragraph.id}
            Paragraph={this.state.Paragraph}
          />
          <div className="center-block text-center m-4">
            <Button key={this.state.Button.id} button={this.state.Button} />
          </div>
          <img className=" mx-5" src={Pic} alt="" />
          <h3>Missing Content</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Brainstorm;
