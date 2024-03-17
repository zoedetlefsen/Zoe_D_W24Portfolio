import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css'; 
import profilePic from '../assets/profileimage.jpg'; 

const Header = () => {
  return (
    <header className="header">
      <div className="profile-picture">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="header-content">
        <h1>Zoe Detlefsen</h1>
        <p>Aspiring to make an impact in the field of Cyber Security</p>
      </div>
    </header>
  );
};

export default Header;
