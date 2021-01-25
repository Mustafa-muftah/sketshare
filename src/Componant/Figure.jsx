import React, { Component } from "react";
import "./Figure.css";

class ContentTwo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col">
          <figure>
            <img src={this.props.image.src} alt="" />
            <figcaption>
              <strong>{this.props.image.strong}</strong>
              <br></br> {this.props.image.paragraph}
            </figcaption>
          </figure>
        </div>
      </React.Fragment>
    );
  }
}

export default ContentTwo;
