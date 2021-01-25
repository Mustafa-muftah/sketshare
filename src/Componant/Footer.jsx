import React, { Component } from "react";
import "./Footer.css";
import PicOne from "../Assets/Pics/ipad.png";
import PicTwo from "../Assets/Pics/iphone.png";
import PicThree from "../Assets/Pics/Google-Play.png";
import PicFour from "../Assets/Pics/AppStore.png";
import facebook from "../Assets/Pics/facebook.svg";
import linkedin from "../Assets/Pics/linkedin.svg";
import youtube from "../Assets/Pics/youtube.svg";
import insta from "../Assets/Pics/insta.svg";
import playstore from "../Assets/Pics/playstore.svg";
import apple from "../Assets/Pics/Apple.svg";
import HeaderCenter from "./HeaderCenter";

class Footer extends Component {
  state = {
    Header: { text: " Synchronized, Portable, and on all Devices" },
  };
  render() {
    return (
      <div className="footer">
        <div className="head">
          <HeaderCenter header={this.state.Header} />
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src={PicOne}
                  alt=""
                  style={{ width: "80%" }}
                  className="PicOne"
                />
              </div>
              <div className="col">
                <img
                  src={PicTwo}
                  alt=""
                  style={{ width: "80%" }}
                  className="PicTwo"
                />
              </div>
            </div>
          </div>
          <p> Available for your smartphone or tablet</p>
          <div className="center-block text-center m-5">
            <a className="m-4">
              <img src={PicFour} alt="" />
            </a>
            <a>
              <img src={PicThree} alt="" />
            </a>
          </div>
        </div>
        <div className="bottom">
          <div className="row">
            <div className="col">
              <h4>Product</h4>

              <a href=""> Download Sketshare help file</a>

              <a href=""> Resources</a>
            </div>
            <div className="col">
              <h4>Pricing</h4>
              <a href=""> Our Plans</a>
            </div>
            <div className="col">
              <h4>Company</h4>
              <a href=""> About</a>
            </div>
            <div className="col">
              <h4>Users</h4>

              <a href=""> Sign in</a>

              <a href=""> Register</a>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col">
              <h4>Find us on:</h4>
              <img className="m-1" src={facebook} alt="" />
              <img className="m-1" src={linkedin} alt="" />
              <img className="m-1" src={youtube} alt="" />
              <img className="m-1" src={insta} alt="" />
            </div>
            <div className="col ">
              <h4>Download our app</h4>
              <img className="m-2" src={apple} alt="" />
              <img className="m-2" src={playstore} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
