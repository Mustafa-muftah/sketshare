import React, { Component } from "react";
import "./EffectiveSection.css";
import FatherOfFiveButtons from "./FatherOfFiveButtons";
import Button from "./Button";
import { Router, Route, Link, Switch, NavLink } from "react-router-dom";
import Audio from "./AudioCommunication";
import Session from "./Session";
import Share from "./Share";
import Tool from "./Tool";
import Board from "./Board";

class EffectiveSection extends Component {
  ButtonText = [
    { id: 0, text: "Audio Communication" },
    { id: 1, text: "Session recording" },
    { id: 2, text: "Share board with others" },
    { id: 3, text: "Variant tool kit" },
    { id: 4, text: "Different board grid styles and color" },
  ];
  state = {
    // isClicked: false,
    // content: ["Missing", "content", "no", "here", "hidden"],
    // num: -1,
  };
  // isClicked = (id) => {
  //   this.setState({
  //     num: id,
  //   });
  // };
  // getClass = () => (this.state.isClicked ? "clicked" : "button");
  render() {
    const text = ` Discover More `;

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
              {/* <h3>{this.state.content[this.state.num]}</h3> */}

              <Route path="/Audio" component={Audio}></Route>
              <Route path="/Session" component={Session}></Route>
              <Route path="/Share" component={Share}></Route>
              <Route path="/Tool" component={Tool}></Route>
              <Route path="/Board" component={Board}></Route>
            </div>
            <div className="col">
              <Link to="/Audio">Audio Communication</Link>
              <Link to="/Session">Session recording</Link>
              <Link to="/Share">Share board with others</Link>
              <Link to="/Tool">Variant tool kit</Link>
              <Link to="/Board">Different board grid styles and color</Link>

              {/* <FatherOfFiveButtons
                clickedButtonId={this.state.num}
                onclick={this.isClicked}
                class={this.getClass}
                ButtonText={this.ButtonText}
              /> */}
              <p>and much more</p>
              <div className="center-block text-center m-4">
                <Button button={text} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EffectiveSection;
