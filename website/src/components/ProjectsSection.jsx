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
    <div className='ProjectsSection'>
      <h1 className='ProjectsLabel'>Projects</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        simulateTouch={true} // Enable mouse dragging
        allowTouchMove={true} // Enable touch dragging
      >
        <SwiperSlide>
          <div class='nft'>
            <div class='main'>
              <img
                class='tokenImage'
                src='https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='NFT'
              />
              <h2>Kibertopiks #4269</h2>
              <p class='description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto neque laboriosam blanditiis harum eos voluptate
                explicabo quasi eum quibusdam veritatis exercitationem ea
                suscipit beatae vero amet, incidunt veniam nemo ducimus.
              </p>

              <hr />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='nft'>
            <div class='main'>
              <img
                class='tokenImage'
                src='https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='NFT'
              />
              <h2>Kibertopiks #4269</h2>
              <p class='description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto neque laboriosam blanditiis harum eos voluptate
                explicabo quasi eum quibusdam veritatis exercitationem ea
                suscipit beatae vero amet, incidunt veniam nemo ducimus.
              </p>

              <hr />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='nft'>
            <div class='main'>
              <img
                class='tokenImage'
                src='https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='NFT'
              />
              <h2>Kibertopiks #4269</h2>
              <p class='description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto neque laboriosam blanditiis harum eos voluptate
                explicabo quasi eum quibusdam veritatis exercitationem ea
                suscipit beatae vero amet, incidunt veniam nemo ducimus.
              </p>

              <hr />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='nft'>
            <div class='main'>
              <img
                class='tokenImage'
                src='https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='NFT'
              />
              <h2>Kibertopiks #4269</h2>
              <p class='description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto neque laboriosam blanditiis harum eos voluptate
                explicabo quasi eum quibusdam veritatis exercitationem ea
                suscipit beatae vero amet, incidunt veniam nemo ducimus.
              </p>

              <hr />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='nft'>
            <div class='main'>
              <img
                class='tokenImage'
                src='https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='NFT'
              />
              <h2>Kibertopiks #4269</h2>
              <p class='description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto neque laboriosam blanditiis harum eos voluptate
                explicabo quasi eum quibusdam veritatis exercitationem ea
                suscipit beatae vero amet, incidunt veniam nemo ducimus.
              </p>

              <hr />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='nft'>
            <div class='main'>
              <img
                class='tokenImage'
                src='https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='NFT'
              />
              <h2>Kibertopiks #4269</h2>
              <p class='description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto neque laboriosam blanditiis harum eos voluptate
                explicabo quasi eum quibusdam veritatis exercitationem ea
                suscipit beatae vero amet, incidunt veniam nemo ducimus.
              </p>

              <hr />
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default ProjectsSection;
