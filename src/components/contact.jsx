import React, { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

class Contact extends Component {
  state = {
    response: '',
    error: '',
    email: '',
    name: '',
    message: '',
    phone: ''
  };
  render() {
    return (
      <React.Fragment>
        <Navbar darkBg />
        <section className="module" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="m-title c-align">
                  <h2>Let's talk</h2>
                  <h6>Drop us a line or give me a call</h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                {/* <form> */}
                  <div className="row">
                    <div className="form-group col-sm-4">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required=""
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group col-sm-4">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required=""
                        // onKeyUp={text => handleOnKeyup(text, 'email')}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group col-sm-4">
                      <input
                        className="form-control"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required=""
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group col-sm-12">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        rows="8"
                        required=""
                        style={{ height: 184 }}
                      ></textarea>
                    </div>
                    <div className="form-group col-sm-12">
                      <div className="text-center m-t-20">
                        <button className="btn btn-round btn-brand" onClick={ this.handleContactSubmit }>
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </div>
                {/* </form> */}
                {this.state.response ? 
                <div
                  className="alert alert-success text-center"
                  id="contact-response"
                >{this.state.response}</div>
                :''}
                
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Phone Number</h4>
                    <p className="card-text">08039356925</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Email Address</h4>
                    <p className="card-text">kunsal2003@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }

  handleOnKeyup = (value, type) => {
    if (value === '') {
      
    }
  }

  handleContactSubmit = () => {
    this.setState({response: 'Thank you for contacting me. I will get back to shortly'});
  } 
}

export default Contact;
