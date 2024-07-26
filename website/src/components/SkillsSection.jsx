/** @format */

import React from "react";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <section id='skills-section'>
      <div className='SkillsSection'>
        <h1 className='SkillsLabel'>Skills</h1>
        <div className='container'>
          <div className='card'>
            <img src='images/python.svg' alt='Python' />

            <h3>Python</h3>
          </div>
          <div className='card'>
            <img src='images/C.png' alt='Python' />

            <h3>C/C++</h3>
          </div>
          <div className='card'>
            <img src='images/js.png' alt='Python' />

            <h3>JavaScript</h3>
          </div>
          <div className='card'>
            <img src='images/git.avif' alt='Python' />

            <h3>Git</h3>
          </div>
          <div className='card'>
            <img src='images/ts.png' alt='Python' />
            <h3>TypeScript</h3>
          </div>
          <div className='card'>
            <img src='images/react.png' alt='Python' />
            <h3>React JS</h3>
          </div>
          <div className='card'>
            <img src='images/dj.png' alt='Python' />
            <h3>Django</h3>
          </div>
          <div className='card'>
            <img src='images/Mysql.png' alt='Python' />
            <h3>MySql</h3>
          </div>
          <div className='card'>
            <img src='path/to/python.png' alt='Python' />
            <h3>Python</h3>
          </div>
          <div className='card'>
            <img src='path/to/python.png' alt='Python' />
            <h3>Python</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
