import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand">Client Panel</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapsenavbar-collapse" id="nabar-main">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;