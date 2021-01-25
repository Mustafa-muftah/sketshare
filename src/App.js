import React, { Component } from "react";
import NavBar from "./Componant/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Brainstorm from "./Componant/Brainstorm";
import EffectiveSection from "./Componant/EffectiveSection";
import BlueBackground from "./Componant/BlueBackground";
import Sketshare from "./Componant/Sketshare";
import Footer from "./Componant/Footer";
import ThreeFigures from "./Componant/ThreeFigures";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Brainstorm />
        <ThreeFigures />
        <EffectiveSection />
        <BlueBackground />
        <Sketshare />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
