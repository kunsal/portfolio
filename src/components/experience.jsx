import React, { Component } from 'react';
import Navbar from './navBar';
import Timeline from './timeline';
import experience from '../helpers/experience';
import Footer from './footer';

class Experience extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Navbar darkBg />
        <section className="module module-gray" id="resume">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="m-title c-align">
                  <h2>My Experience</h2>
                  <h6>Education & Work</h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Timeline data={ experience } />
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