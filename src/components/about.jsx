import React, { Component } from "react";
import Navbar from "./navBar";
import Progress from "./progress";
import skills from "../helpers/skills";
import kunle2 from "../images/kunle2.jpg";
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
                  Innovative and results-driven Software Developer with 8+ years
                  of experience building scalable web and mobile applications
                  across fintech, insurance, and e-commerce sectors. Adept at
                  leading cross-functional teams, aligning IT solutions with
                  business goals, and delivering high-impact digital products
                  using modern tech stacks.
                </p>

                <p>
                  My stacks span front-end and back-end, leveraging tools such
                  as: PHP (Laravel, CodeIgniter, Magento 2, WordPress),
                  TypeScript, JavaScript (NodeJS/Express, ReactJS, React Native,
                  Angular), Database (MySQL, PostgreSQL, MongoDB), Version
                  Control (Git), Utility tools (CircleCI, TravisCI, Amazon Web
                  Services, and Docker).
                </p>
              </div>
              <div className="col-md-4">
                <h5>My Skills</h5>
                {skills.map(({ title, value }) => (
                  <Progress key={title} title={title} value={value} />
                ))}
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
