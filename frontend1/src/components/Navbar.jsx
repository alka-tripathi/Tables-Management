import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
          >
            BlueFram
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link
                className="nav-link"
                to="/aboutUs"
              >
                About Us
              </Link>
              <Link
                className="nav-link"
                to="/pricing"
              >
                Menu
              </Link>
              <Link
                className="nav-link disabled"
                aria-disabled="true"
              >
                We Welcome you
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
