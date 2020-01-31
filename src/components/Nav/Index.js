import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-toggleable-md fixed-top profile-stats">
    <div className="collapse navbar-collapse container">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link">
            <i className="oction oction-home" aria-hidden="true"></i>
            Home
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link">
            <i className="oction oction-zap"></i>
            Moments
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link">
            <i class="oction oction-bell"></i>
            Notifications
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link">
            <i class="oction oction-inbox"></i>
            Messages
          </a>
        </li>
      </ul>
      <form className="navbar-form" role="search">
        <div className="input-group">
          <input
            type="text"
            className="form-control input-search"
            placeholder="Search Twitter"
          />
          <div className="btn-group">
            <button class="btn btn-default btn-search" type="submit">
              <i className="navbar-search-icon"></i>
            </button>
          </div>
        </div>
      </form>
      <div className="dropdown navbar-user-dropdown">
        <button className="btn btn-secondary btn-circle dropdown-toggle"></button>
      </div>
      <button className="btn btn-search-bar">Tweet</button>
    </div>
  </nav>
);

export default Nav;
