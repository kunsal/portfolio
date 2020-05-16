import React, { Component } from 'react';
import Navbar from './navBar';
import Timeline from './timeline';
import experience from '../helpers/experience';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Experience extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Navbar darkBg />
        <section class="module module-gray" id="resume">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="m-title c-align">
                  <h2>My Experience</h2>
                  <h6>Education & Work</h6>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <Timeline data={ experience } />
                <div class="text-center">
                  <Link class="btn btn-lg btn-gray" to="/projects">
                    <span>See Projects</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
      
     );
  }
}
 
export default Experience