

import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


function Index() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Google Books Search
        </Link>
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/"
                    className={window.location.pathname === "/" || window.location.pathname === "/search"
                      ? "nav-link active"
                      : "nav-link"}>Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/savedbooks"
                    className={window.location.pathname === "/savedbooks"
                      ? "nav-link active"
                      : "nav-link"}>Saved Books</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Index;