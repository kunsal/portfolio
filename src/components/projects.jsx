import React, { Component } from "react";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>My Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src="https://picsum.com/200" />
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Projects;
