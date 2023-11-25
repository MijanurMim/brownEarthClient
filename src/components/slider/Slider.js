/** @format */

import React from "react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg3 from "../../resources/humaira-bashir/humaira-7.jpg";
import sliderImg2 from "../../resources/humaira-bashir/humaira-8.jpg";
import sliderImg1 from "../../resources/humaira-bashir/humaira-10.jpg";

import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="container-1">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="xl:max-h-[800px] "
        >
          <SwiperSlide>
            <img className="w-full object-cover" src={sliderImg1} alt="img" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full object-cover" src={sliderImg2} alt="img" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full object-cover" src={sliderImg3} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
