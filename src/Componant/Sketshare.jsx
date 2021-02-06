import React, { Component } from "react";
import "./Sketshare.css";
import FatherTakeMark from "./FatherTakeMark";
import Button from "./Button";

class Sketshare extends Component {
  state = {};
  render() {
    const text = ` Create Your First Board `;
    return (
      <div className="contentFive">
        <div className="row">
          <div className="col">
            <h3>
              Sketshare for all<br></br> Creatives
            </h3>
            <p>
              With Sketshare you will be able to link with multiple people and
              discuss virtually through sketching an idea you have
            </p>
            <div className="row row1">
              <FatherTakeMark />
            </div>
            <p style={{ margin: "20px 50px" }}>
              And everyone with an idea worth sharing
            </p>
            <div className="center-block text-center ">
              <Button button={text} />
            </div>
          </div>
          <div className="col">
            <p>Missing Content</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sketshare;
