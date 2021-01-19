import React, { Component } from "react";
import "./ContentThree.css";

class ContentThree extends Component {
  state = {};
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
              <ul>
                <li className="active">Audio Communication</li>
                <li>Session recording</li>
                <li>Share board with others</li>
                <li>Variant tool kit</li>
                <li className="active">
                  Different board grid styles and color
                </li>
              </ul>
              <p>and much more</p>
              <div className="center-block text-center m-4">
                <button className="btn "> Discover More</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContentThree;
