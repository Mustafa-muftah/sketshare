import React, { Component } from "react";
import Logo from "../Assets/Pics/Logo.png";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

class NavBar extends Component {
  state = {};
  render() {
    const text = ` Start For Free `;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand mx-4" href="#">
            <img src={Logo} alt="" />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/about">
                Recourses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/contact">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/cart">
                About
              </a>
            </li>
            <div className="vl mx-4 .d-md-none .d-lg-block"></div>
            <li className="nav-item">
              <a className="nav-link" to="/login">
                Sign in
              </a>
            </li>

            <Button button={text} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
