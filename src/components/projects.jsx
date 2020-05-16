import React, { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar darkBg />
        
        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;
