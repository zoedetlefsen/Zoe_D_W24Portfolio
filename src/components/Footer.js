import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/contact">Contact Me</Link>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Zoe Detlefsen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
