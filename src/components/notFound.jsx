import React from "react";
import Navbar from "./navBar";

const NotFound = () => {
  return (
    <React.Fragment>
      <Navbar darkBg />
      <section className="module module-gray" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="m-title c-align">
              </div>
            </div>
          </div>
          <div className="d-flex flex-column m-b-3 justify-content-around align-items-center">
            <h1>Sorry!</h1>
            <h3>The page you are looking for cannot be found</h3>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NotFound;
