import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@mui/material';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: '#344CB7' }}
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

              {/* Dropdown button */}
              <Button
                className="nav-link text-white"
                onClick={handleClick}
                style={{ textTransform: 'none' }}
              >
                Menu
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/menu/coffee"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Coffee
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/menu/drink"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Drinks
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/menu/icecream"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Ice-Cream
                  </Link>
                </MenuItem>
              </Menu>

              <span
                className="nav-link disabled"
                aria-disabled="true"
              >
                We Welcome you
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
