import React, { Component } from "react";
import Navbar from "./navBar";
import Progress from "./progress";
import skills from "../helpers/skills";
import kunle2 from '../images/kunle2.jpg';
import Footer from "./footer";
class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar darkBg />
        <section className="module" id="profile">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="m-title c-align">
                  <h2>Olakunle Salami</h2>
                  <h6>Software Engineer (Fullstack)</h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p>
                  <img src={kunle2} alt="Profile pix" />
                </p>
              </div>
              <div className="col-md-4">
                <h5>Profesional Profile</h5>
                <p>
                  I am an innovative software engineer with more than 4-years
                  experience delivering technical solutions to small, medium
                  and multinational companies. In my career, I have been
                  involved in different aspects of the software development life
                  cycle, from project planning to deployment, which makes me a
                  versatile and flexible team member. 
                </p>
                <p>
                  I have also spent a notable amount of years working in the
                  financial industry building payment solutions, credit bureau
                  services and e-commerce solutions.
                </p>
                <p>
                  My stacks span front-end
                  and back-end with the following tools to my credit: PHP
                  (Laravel, CodeIgniter, Magento 2), JavaScript (NodeJS/Express,
                  ReactJS, React Native, Angular), Python (Flask), Database
                  (MySQL, Oracle, PostgreSQL, MongoDB), Git, Trello, CircleCI,
                  TravisCI, AWS, and Docker.
                </p>
              </div>
              <div className="col-md-4">
                <h5>My Skills</h5>
                {skills.map(({title, value}) => <Progress key={title} title={title} value={value} />)}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
