import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Nav.css';


const NavBar = () => {
  return (

    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/academiccredentials">Academic Credentials</Link></li>
        <li><Link to="/academicworkexperience">Academic Work Experience</Link></li>
        <li><Link to="/professionalsummary">Professional Summary</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="dropdown">
          Resources
          <ul className="dropdown-content">
            <li><Link to="/resources/resume">Resume</Link></li>
            <li><Link to="/resources/cover-letter">Cover Letter</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
