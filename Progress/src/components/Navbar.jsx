import React, { Component } from 'react';
const NavBar = (props) => {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar 
            <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
          </a>
        </div>
      </nav>
    );
}
export default NavBar;
