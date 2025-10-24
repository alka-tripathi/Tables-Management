import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar({ customHeight }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="navbar"
      style={{
        background: 'linear-gradient(135deg, #1B263B, #415A77)',
        height: customHeight || '65px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="container-fluid d-flex justify-content-between align-items-center px-4"
        style={{ height: '100%' }}
      >
        {/* Brand */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            color: '#00B4D8',
            fontSize: '1.6rem',
            letterSpacing: '1px',
            textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
          }}
        >
          BlueFarm
        </Link>

        {/* Hamburger Icon (Toggle) */}
        <div
          className="d-lg-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <CloseIcon
              sx={{ color: 'white', fontSize: 30, cursor: 'pointer' }}
            />
          ) : (
            <MenuIcon
              sx={{ color: 'white', fontSize: 30, cursor: 'pointer' }}
            />
          )}
        </div>

        {/* Navbar Links */}
        <div
          className={`nav-links ${isOpen ? 'open' : ''}`}
          style={{
            display: isOpen ? 'flex' : '',
          }}
        >
          <Link
            className="nav-link"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            className="nav-link"
            to="/aboutUs"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>

          <Button
            onClick={handleClick}
            style={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            Menu
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                boxShadow:
                  'rgba(0, 0, 0, 0.15) 0px 4px 10px, rgba(0, 0, 0, 0.05) 0px 1px 2px',
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/menu/coffee"
                style={{
                  textDecoration: 'none',
                  color: '#1B263B',
                  fontWeight: 500,
                }}
              >
                Coffee
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/menu/drink"
                style={{
                  textDecoration: 'none',
                  color: '#1B263B',
                  fontWeight: 500,
                }}
              >
                Drinks
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/menu/icecream"
                style={{
                  textDecoration: 'none',
                  color: '#1B263B',
                  fontWeight: 500,
                }}
              >
                Ice-Cream
              </Link>
            </MenuItem>
          </Menu>

          <span
            className="nav-link"
            style={{
              color: '#A8DADC',
              fontStyle: 'italic',
              opacity: 0.9,
            }}
          >
            We Welcome You 🌿
          </span>
        </div>
      </div>

      {/* --- CSS Styles --- */}
      <style>{`
        .nav-links {
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.4s ease;
        }

        .nav-link {
          color: #E0E1DD !important;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease, transform 0.2s;
        }

        .nav-link:hover {
          color: #00B4D8 !important;
          transform: scale(1.05);
        }

        /* ---------- Mobile View ---------- */
        @media (max-width: 992px) {
          .nav-links {
            position: absolute;
            top: 65px;
            left: 0;
            width: 100%;
            height: 0;
            flex-direction: column;
            background-color: #1B263B;
            overflow: hidden;
            justify-content: center;
            align-items: center;
          }

          .nav-links.open {
            height: 250px;
            padding: 20px 0;
          }

          .nav-link {
            font-size: 1.1rem;
            padding: 5px 0;
          }

          Button {
            margin-top: 8px;
          }
        }
      `}</style>
    </nav>
  );
}
