/** @format */

import React from "react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg2 from "../../resources/projectUrbanica/2.jpg";
import sliderImg4 from "../../resources/projectUrbanica/3.jpg";
import sliderImg1 from "../../resources/projectUrbanica/4.jpg";
import sliderImg3 from "../../resources/urbanica2.jpg";

import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="container-1   opacity-90 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="3xl:h-screen "
        >
          <SwiperSlide>
            <img className="w-full object-cover  " src={sliderImg1} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full" src={sliderImg2} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full " src={sliderImg3} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full" src={sliderImg4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
