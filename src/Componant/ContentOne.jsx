import React, { Component } from "react";
import "./ContentOne.css";
import Pic from "../Group 1068.svg";

class ContentOne extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="contentOne">
          <h3>
            Brainstorm Smarter. <br></br> Faster. Together.
          </h3>
          <p>
            Sketchshare help users to brainstorm and transfer thier ideas{" "}
            <br></br> through voice , video , shapes , color and grid on one
            board
          </p>
          <div className="center-block text-center m-4">
            <button className="btn  text-center " type="submit">
              <strong>Create board , Free</strong>
            </button>
          </div>
          <img className=" mx-5" src={Pic} alt="" />
          <h3>Missing Content</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default ContentOne;
