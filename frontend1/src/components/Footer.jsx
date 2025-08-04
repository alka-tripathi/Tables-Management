import React from 'react';
import '../style/footer.css';
import Rating from '@mui/material/Rating';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <div className="footer">
      <div className="top-box">
        <h3>Rate our BlueFarm Website?</h3>
        <Rating style={{ fontSize: '30px' }}></Rating>
      </div>

      <div className="info">
        <div className="resource">
          <h4>Resource</h4>
          <ul>
            <li>Using Hologram</li>
            <li>Docs</li>
            <li>Support</li>
            <li>Supported Hardware</li>
          </ul>
        </div>
        <div className="company">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Partnerships</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="developer">
          <h4>Developer</h4>
          <ul>
            <li>Forum</li>
            <li>Projects</li>
            <li>Open Source</li>
          </ul>
        </div>
        <div className="social">
          <h4>Social</h4>
          <ul>
            <li>
              <InstagramIcon></InstagramIcon>
            </li>
            <li>
              <FacebookIcon></FacebookIcon>
            </li>
            <li>
              <TwitterIcon></TwitterIcon>
            </li>
            <li>
              <LinkedInIcon></LinkedInIcon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
