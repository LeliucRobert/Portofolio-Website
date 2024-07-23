/** @format */

import React from "react";
import "./ContactSection.css";
const ContactSection = () => {
  return (
    <div className='ContactSection'>
      <section className='contact'>
        <div className='content'>
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us for any queries or suggestions.</p>
        </div>
        <div className='container'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='icon'>
                <b></b>
              </div>
              <div className='text'>
                <h3>Phone</h3>
                <p>1069350</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'>
                <b></b>
                <i class='fa-regular fa-envelope'></i>
              </div>
              <div className='text'>
                <h3>Email</h3>
                <p>akfmwakfa@gmail.com</p>
              </div>
            </div>
            <h2 className='txt'>Let's connect!</h2>
            <ul className='sci'>
              <li>
                <a href='#'>
                  <i class='fa-brands fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i class='fa-brands fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i class='fa-brands fa-github'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i class='fa-brands fa-linkedin'></i>
                </a>
              </li>
              <li>
                <a href='#'></a>
              </li>
            </ul>
          </div>
          <div className='contactForm'>
            <form>
              <h2>Send Message</h2>
              <div className='inputBox'>
                <input type='text' name='' requierd='required' />
                <span>Full Name</span>
              </div>

              <div className='inputBox'>
                <input type='text' name='' requierd='required' />
                <span>Email</span>
              </div>

              <div className='inputBox'>
                <textarea required='required'></textarea>
                <span>Type your Message...</span>
              </div>

              <div className='inputBox'>
                <input type='submit' value='Send' />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
