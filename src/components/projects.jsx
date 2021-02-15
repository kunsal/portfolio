import React, { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import Card from "./card";
import projects from "../helpers/projects";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar darkBg />
        <section className="module module-gray" id="resume">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="m-title c-align">
                  <h2>Projects</h2>
                  <h6>Works I have done</h6>
                </div>
              </div>
            </div>
            <div className="d-sm-flex d-md-flex flex-md-row flex-sm-column m-b-3 justify-content-md-between justify-content-sm-around">
                {projects.map(project => (
                  <Card title={project.title} key={project.title} text={project.text} image={project.image} link={project.link} linkTitle={project.linkTitle } />
                ))}
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;
