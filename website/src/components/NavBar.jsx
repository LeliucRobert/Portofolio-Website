import React, { useState } from 'react';

const NavBar = () => {
  return (
    <nav className="NavBar">
    <div className="NavBarLabel">
      <div className="NavBarLabel1">Software</div>
      <div className="NavBarLabel2">Developer</div>
    </div>

      <div className="NavBarLinks">
        <a href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;