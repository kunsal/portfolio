import React, { Component } from "react";
import Jumbotron from "./jumbotron";
import Projects from "./projects";
import Navbar from "./navBar";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
          <Jumbotron />
      </React.Fragment>
    );
  }
}

export default Home;
