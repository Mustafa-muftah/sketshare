import React, { Component } from "react";
import PicOne from "../Assets/Pics/Brainstorm.svg";
import PicTwo from "../Assets/Pics/Collaboration.svg";
import PicThree from "../Assets/Pics/Communication.svg";
import Figure from "./Figure.jsx";
import HeaderCenter from "./HeaderCenter";

class ThreeFigures extends Component {
  state = {
    images: [
      {
        id: 1,
        src: PicOne,
        strong: "Brainstorming",
        paragraph: "All the tools you need to present your ideas effectively",
      },
      {
        id: 2,
        src: PicTwo,
        strong: "Collaboration",
        paragraph:
          "Easily invite your teammates to join you and share your ideas together",
      },
      {
        id: 3,
        src: PicThree,
        strong: "Communication",
        paragraph:
          "Turn on your mic and start speaking to your mates while brainstorming",
      },
    ],
    Header: {
      id: 1,
      text: ` All in One Place. `,
    },
  };

  render() {
    return (
      <React.Fragment>
        <HeaderCenter key={this.state.Header.id} header={this.state.Header} />

        <div className="container">
          <div className="row">
            {this.state.images.map((image) => (
              <Figure key={image.id} image={image} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ThreeFigures;
