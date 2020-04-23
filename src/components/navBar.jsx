import React from "react";
import { NavLink, Link } from "react-router-dom";


export default class Navbar extends React.Component {
  render() {
    const {pages} = this.props;
    return (
      
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-transparent">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Kaytivity
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
            
         
          <div className="collapse navbar-collapse" id="navbarCollapse">
            
              <ul className="navbar-nav mr-auto pull-right">
                {pages.map(page => (
                  <li className="nav-item" key={page.link}>
                    <NavLink to={page.link} className="nav-link">{page.name}</NavLink>
                  </li>
                ))}
              </ul>  
          </div>
        </div>
      </nav>
      );
    }
  }
