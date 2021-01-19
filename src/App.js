import React, { Component } from "react";
import NavBar from "./Componant/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import ContentOne from "./Componant/ContentOne";
import ContentTwo from "./Componant/ContentTwo";
import ContentThree from "./Componant/ContentThree";
import ContentFour from "./Componant/ContentFour";
import ContentFive from "./Componant/ContentFive";
import Footer from "./Componant/Footer";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ContentOne />
        <ContentTwo />
        <ContentThree />
        <ContentFour />
        <ContentFive />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
