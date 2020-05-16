import React, { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar darkBg />
        <section class="module" id="contact">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="m-title c-align">
                  <h2>Let's talk</h2>
                  <h6>Drop us a line or give me a call</h6>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                {/* <form id="contact-form" method="post" novalidate=""> */}
                  <div class="row">
                    <div class="form-group col-sm-4">
                      <input
                        class="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required=""
                      />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="form-group col-sm-4">
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required=""
                      />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="form-group col-sm-4">
                      <input
                        class="form-control"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required=""
                      />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="form-group col-sm-12">
                      <textarea
                        class="form-control"
                        name="message"
                        placeholder="Message"
                        rows="8"
                        required=""
                        style={{ height: 184 }}
                      ></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                      <div class="text-center m-t-20">
                        <button class="btn btn-round btn-brand" onClick={ this.handleContactSubmit }>
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </div>
                {/* </form> */}

                <div
                  class="ajax-response text-center"
                  id="contact-response"
                ></div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }

  handleContactSubmit = () => {
    alert('Hello kay');
  } 
}

export default Contact;
