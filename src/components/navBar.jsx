import React from "react";
import { NavLink } from "react-router-dom";
import pages from '../helpers/pages';

export default class Navbar extends React.Component {
  render() {
    const { darkBg } = this.props;
    let headerClass = 'header header-center ';
    if (darkBg) {
      headerClass += 'header-dark';
    } else {
      headerClass += 'header-light'
    }
    return (
      <header className={headerClass}>
        <div className="container-fluid">
          <div className="inner-header">
            <a className="inner-brand" href="/" style={{ fontSize: 22, color: '#fff', fontWeight: 'bolder' }}>
              <strong>Kaytivity</strong>  
            </a>
          </div>

          <div className="inner-navigation collapse">
            <div className="inner-nav onepage-nav">
              <ul>
                {pages.map(page => (
                  <li className="nav-item" key={page.link}>
                    <NavLink to={page.link}>
                      <span className="menu-item-span">{page.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-toggle">
          <a href="javascript(void)" data-toggle="collapse" data-target=".inner-navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
        </div>
      </header>
    );
  }
}

