import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../style/navbar.css'; // ✅ Import external CSS

export default function Navbar({ customHeight }) {
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [anchorFeedback, setAnchorFeedback] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = (e) => setAnchorMenu(e.currentTarget);
  const handleFeedbackOpen = (e) => setAnchorFeedback(e.currentTarget);
  const handleClose = () => {
    setAnchorMenu(null);
    setAnchorFeedback(null);
  };

  return (
    <nav
      className="navbar"
      style={{
        background: 'linear-gradient(135deg, #1B263B, #415A77)',
        height: customHeight || '65px',
      }}
    >
      <div className="navbar-container">
        {/* Brand Name */}
        <Link
          to="/"
          className="navbar-brand"
        >
          BlueFarm
        </Link>

        {/* Hamburger (mobile) */}
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
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

        {/* Links Section */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/aboutUs"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>

          {/* Menu Dropdown */}
          <Button
            onClick={handleMenuOpen}
            sx={{ color: 'white', textTransform: 'none', fontWeight: 500 }}
          >
            Menu
          </Button>
          <Menu
            anchorEl={anchorMenu}
            open={Boolean(anchorMenu)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/menu/coffee"
                className="menu-item-link"
              >
                Coffee
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/menu/drink"
                className="menu-item-link"
              >
                Drinks
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/menu/icecream"
                className="menu-item-link"
              >
                Ice-Cream
              </Link>
            </MenuItem>
          </Menu>

          {/* Feedback Dropdown */}
          <Button
            onClick={handleFeedbackOpen}
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              px: 2,
              py: 1,
              fontWeight: 500,
              color: '#1B263B',
              textTransform: 'none',
            }}
          >
            Feedback
          </Button>
          <Menu
            anchorEl={anchorFeedback}
            open={Boolean(anchorFeedback)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/addfeedback"
                className="menu-item-link"
              >
                Add Feedback
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/allfeedback"
                className="menu-item-link"
              >
                See Feedback
              </Link>
            </MenuItem>
          </Menu>

          <span className="nav-msg">We Welcome You 🌿</span>
        </div>
      </div>
    </nav>
  );
}
