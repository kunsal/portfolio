import React, { Component } from "react";
import Navbar from "./navBar";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <section
          className="module-header full-height parallax bg-dark bg-dark-30 text-center home-bg"
          id="home"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-right">
                <h1 className="h1 m-b-15">
                  Olakunle
                  <br /> Salami
                </h1>
                <h1 className="h6 m-b-40">Software Engineer (Fullstack)</h1>
                <p className="m-b-80">
                  <Link to="/about" className="btn btn-brand">
                    <span>More About Me</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
