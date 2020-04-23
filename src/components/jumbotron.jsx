import React, { Component } from "react";

class Jumbotron extends Component {
  state = {};

  styles = {
    spaceLetters: {
      letterSpace: 10
    }
  };

  render() {
    return (
      <div className="jumbotron d-md-flex flex-md-column justify-content-md-center align-items-md-center">
        <h1 className="big-title mb-400">HELLO!</h1>
        <h2 className="small-title">MY NAME IS OLAKUNLE SALAMI</h2>
        <p className="jumbo-text mt-3">
          I am an Engineer
        </p>

        <a className="btn btn-primary btn-lg" href="#" role="button">
          See My Portfolio
        </a>
      </div>
    );
  }
}

export default Jumbotron;
