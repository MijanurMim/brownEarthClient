import React, { useEffect } from "react";
import ReactPlayer from "react-player";

import sal from "sal.js";

import Slider from "../../components/slider/Slider";
import FeaturedWorks from "../featuredWorks/FeaturedWorks";

const Home = () => {
  useEffect(() => {
    sal({
      threshold: 1,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className="dark:bg-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {/* Slider  */}
        <Slider />

        {/* Home About Section  */}
        <div className="mt-16 font-poiret lg:mx-20">
          <div
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-duration="1200"
            data-sal-easing="easeInOutSine"
          >
            <h1 className="text-4xl uppercase">
              Building a legacy of excellence
            </h1>
          </div>
          <div className="mt-16 grid grid-cols-4">
            <div></div>
            <div
              className="col-span-3"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1200"
              data-sal-easing="easeInOutSine"
            >
              <p className="text-justify text-xl">
                BrownEarth Developments Ltd. , your premier partner in
                innovative building development solutions. With a steadfast
                commitment to excellence, creativity, and sustainability, we are
                at the forefront of shaping skylines and communities through our
                exceptional projects.At BrownEarth Developments Ltd. we believe
                that buildings are more than just structures; they are living
                spaces that should inspire, elevate, and transform lives. With a
                team of passionate architects, engineers, designers, and
                construction experts, we embark on each project as a unique
                journey, blending cutting-edge technology with timeless design
                principles. BrownEarth Developments Ltd. , your premier partner
                in innovative building development solutions. With a steadfast
                commitment to excellence, creativity, and sustainability, we are
                at the forefront of shaping skylines and communities through our
                exceptional projects.At BrownEarth Developments Ltd. we believe
                that buildings are more than just structures; they are living
                spaces that should inspire, elevate, and transform lives. With a
                team of passionate architects, engineers, designers, and
                construction experts, we embark on each project as a unique
                journey, blending cutting-edge technology with timeless design
                principles.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Works Section  */}
        <FeaturedWorks />

        {/* Video Section  */}
        <div className="mt-36 aspect-video lg:mx-20   ">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=lC6b85dQQCI"
            width="100%"
            height="80%"
            controls={true}
            muted={false}
          />
        </div>

        {/* Footprints Section  */}
        <div className="mb-6 grid  grid-cols-1 gap-2  bg-neutral-300 xl:grid-cols-3        ">
          <div className=" mx-10  flex  font-poiret text-4xl font-bold uppercase    tracking-wider   text-white md:items-center lg:mx-20 ">
            FOOTPRINTS
          </div>
          <div className=" xl:col-span-2">
            {" "}
            <div className="relative    h-[580px] overflow-hidden   bg-gray-300 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.6722002749275!2d90.44431826504896!3d23.806644605037686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7da9bb9d1f7%3A0x2651406d463f1861!2sBrownEarth%20Urbanica!5e0!3m2!1sen!2sbd!4v1680330426846!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="yes"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
