import React, { Component } from "react";
import "./ContentFive.css";
import Pic from "../ok.svg";
class ContentFive extends Component {
  state = {};
  render() {
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
              <img src={Pic} alt="" style={{ width: "6%" }} />
              <span>Designers</span>
              <img src={Pic} alt="" style={{ width: "6%" }} />
              <span>Project Managers</span>
              <img src={Pic} alt="" style={{ width: "6%" }} />
              <span>Architectects</span>
            </div>
            <div className="row row2">
              <img src={Pic} alt="" style={{ width: "6%" }} />
              <span>Executives</span>
              <img src={Pic} alt="" style={{ width: "6%" }} />
              <span>Students &amp; Kids</span>
            </div>
            <p style={{ margin: "20px 50px" }}>
              And everyone with an idea worth sharing
            </p>
            <div className="center-block text-center ">
              <button className="btn ">
                {" "}
                <strong>Create Your First Board </strong>
              </button>
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

export default ContentFive;
