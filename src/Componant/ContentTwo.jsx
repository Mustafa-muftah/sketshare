import React, { Component } from "react";
import "./ContentTwo.css";
import PicOne from "../Group 783.svg";
import PicTwo from "../Group 782.svg";
import PicThree from "../Group 781.svg";

class ContentTwo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3 className="my-5">All in One Place</h3>
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <figure>
                <img src={PicOne} alt="" />
                <figcaption>
                  <strong>Brainstorming</strong>
                  <br></br> All the tools you need to present your ideas
                  effectively{" "}
                </figcaption>
              </figure>
            </div>
            <div className="col">
              <figure>
                <img src={PicTwo} alt="" />
                <figcaption>
                  <strong>Collaboration</strong>
                  <br></br> Easily invite your teammates to join you and share
                  your ideas together
                </figcaption>
              </figure>
            </div>
            <div className="col">
              <figure>
                <img src={PicThree} alt="" />
                <figcaption>
                  <strong>Communication</strong>
                  <br></br> Turn on your mic and start speaking to your mates
                  while brainstorming
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContentTwo;
