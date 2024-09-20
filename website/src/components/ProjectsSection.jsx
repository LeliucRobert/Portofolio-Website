/** @format */

import React from "react";
import pozaImage from "../utils/poza.jpeg";
import "./ProjectsSection.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProjectsSection = () => {
  return (
    <section id="projects-section">
      <br></br>

      <div className="ProjectsSection">
        <h1 className="ProjectsLabel">Projects</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          simulateTouch={true}
          allowTouchMove={true}
        >
          <SwiperSlide>
            <div class="nft">
              <div class="main">
                <img class="tokenImage" src="images/2.png" alt="NFT" />
                <div class="header">
                  <h2>AI StudyPro - Chrome extension</h2>
                  <a
                    href="https://github.com/your-repository"
                    class="github-button"
                  >
                    View on GitHub
                  </a>
                </div>
                <p class="description">
                  Pioneered a Google Chrome extension featuring a custom AI
                  chatbot that understands website content to assist with
                  learning, alongside tools for generating customizable
                  summaries and recommending similar resources to enhance
                  research.
                </p>

                <hr />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="nft">
              <div class="main">
                <img
                  class="tokenImage"
                  src="https://lh3.googleusercontent.com/pw/AP1GczPjsWgfJfNJURd8ItqE1ATKj13w5aGiL6cwSlYkx8tVmVU3fYQktDr2Xa5gx9YzRfWpudAU71JoK5LuYiJW78uQe6dlUq9W168EFQDfrclU-rpBEzRX9asf9sp-qQU-b9IVM5B7vOLCOlVVC2rzemQ=w1905-h935-s-no-gm?authuser=0"
                  alt="NFT"
                />
                <div class="header">
                  <h2>DevPrep - Website for learning CS</h2>
                  <a
                    href="https://github.com/your-repository"
                    class="github-button"
                  >
                    View on GitHub
                  </a>
                </div>
                <p class="description">
                  Built a website designed for helping users learn computer
                  science concepts, solve problems, and practice mock interviews
                  Impacting students across faculties by making their learning
                  structured and enjoyable, enhancing their academic experience
                </p>

                <hr />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="nft">
              <div class="main">
                <img class="tokenImage" src="images/3.jpg" alt="NFT" />
                <div class="header">
                  <h2>AI - Microorganism Identification</h2>
                  <a
                    href="https://github.com/your-repository"
                    class="github-button"
                  >
                    View on GitHub
                  </a>
                </div>
                <p class="description">
                  Developed an artificial intelligence program that identifies
                  tardigrades in photos or in real-time through a microscope,
                  highlighting them with bounding rectangles. Designed to assist
                  sewage treatment plants by identifying microorganisms in water
                  and classifying them as beneficial or harmful.
                </p>

                <hr />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="nft">
              <div class="main">
                <img class="tokenImage" src="images/4.png" alt="NFT" />
                <div class="header">
                  <h2>Nine Men's Morris Game - User vs AI</h2>
                  <a
                    href="https://github.com/your-repository"
                    class="github-button"
                  >
                    View on GitHub
                  </a>
                </div>
                <p class="description">
                  This is an implementation of the Nine Men's Morris board game
                  in Python. The game is played User vs Computer, where the
                  computer has a competitive AI that provides a challenging
                  experience. The game is built using Object-Oriented
                  Programming (OOP) and follows a Layered Architecture design.
                </p>

                <hr />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="nft">
              <div class="main">
                <img class="tokenImage" src="images/5.jpg" alt="NFT" />
                <div class="header">
                  <h2>Tutorials Manager</h2>
                  <a
                    href="https://github.com/your-repository"
                    class="github-button"
                  >
                    View on GitHub
                  </a>
                </div>
                <p class="description">
                  Application which helps you manage online tutorials by
                  creating custom watchlists, and exporting them in CSV or HTML
                  format.It is built using C++ with Object-Oriented Programming
                  (OOP) and follows a Layered Architecture design.The Qt
                  framework is used for creating the graphical user interface
                  (GUI), and MySQL is utilized for managing the tutorials
                  database.
                </p>

                <hr />
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div class="nft">
              <div class="main">
                <img
                  class="tokenImage"
                  src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="NFT"
                />
                <h2>Kibertopiks #4269</h2>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto neque laboriosam blanditiis harum eos voluptate
                  explicabo quasi eum quibusdam veritatis exercitationem ea
                  suscipit beatae vero amet, incidunt veniam nemo ducimus.
                </p>

                <hr />
              </div>
            </div>
          </SwiperSlide> */}
          ...
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
