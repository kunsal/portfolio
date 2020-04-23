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
        <div className="">
          <div className="row">
            <div className="col text-center">
              <h2 className="title">ABOUT</h2>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-md-offset-3">
              <p className="lay-emphasis text-justify">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
          </div>
          <div className="background py-5">
            <div className="row">
              <div className="col text-center">
                <h2 className="title">Featured Projects</h2>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2"></div>
              <div className="col-md-8 col-md-offset-3">
                <p className="lay-emphasis text-justify">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
              </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
