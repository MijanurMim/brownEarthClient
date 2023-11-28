import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import sal from "sal.js";

import Slider from "../../components/slider/Slider";
// import FeaturedWorks from "../featuredWorks/FeaturedWorks";

import featured2 from "../../resources/projectUrbanica/4.jpg";

import featured1 from "../../resources/humaira-bashir/humaira-17.jpg";

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
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {/* Slider  */}
        <Slider />

        {/* Home About Section  */}
        <div className="section--spacing-x section--spacing-y  grid grid-cols-1 lg:grid-cols-3     lg:gap-2  ">
          <div className="mr-10">
            <h2 className="heading--one mb-5 font-light text-secondary ">
              Building a legacy of excellence
            </h2>
          </div>

          <div
            className="col-span-2 "
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1200"
            data-sal-easing="easeInOutSine"
          >
            <p className="description--styles">
              BrownEarth Developments Ltd. Your premier partner in innovative
              building development solutions. With a steadfast commitment to
              excellence, creativity, and sustainability, we are at the
              forefront of shaping skylines and communities through our
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

        {/***  Features Work Section  ***/}
        <div className=" section--spacing-x  section--spacing-y ">
          <h2 className="heading--one mb-6 font-light  text-secondary md:mb-10 ">
            featured works
          </h2>
          <div className=" grid grid-cols-1   gap-y-1 md:grid-cols-3 md:gap-2 ">
            <div className="flex flex-col items-start justify-center bg-stone-200 p-4 lg:p-10 ">
              <Link to="/project-two">
                <h4 className="sub--title">BROWNEARTH </h4>
                <h2 className="project--title">BENCHMARK HOMAYRA BASHIR</h2>
              </Link>

              <h4 className="sub--title">
                Sector 16, Road 503 , <br /> Plot 001 Jolshiri Abashon
              </h4>
            </div>

            {/* left thumb  */}
            <div className="group relative col-span-2  cursor-pointer font-poiret">
              <img
                className=" aspect-21/9 object-cover"
                src={featured1}
                alt=""
              />
              <div class="bg-blur absolute top-0 left-0 hidden h-0  w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500 sm:flex">
                <h2 class="project--title-btn">HOMAYRA BASHIR BENCHMARK</h2>
                <Link
                  to="/project-two"
                  class="mt-5 rounded-full bg-white px-8 py-3 duration-300 hover:bg-stone-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 "
                >
                  Project Details
                </Link>
              </div>
            </div>
          </div>

          <div className="  my-10 grid  grid-cols-1  gap-y-1 md:grid-cols-3 md:gap-2">
            <div className="flex flex-col items-start justify-center bg-stone-200 p-4 lg:p-10">
              <Link to="/project">
                <h4 className="sub--title">brownearth</h4>
                <h2 className="project--title">urbanica</h2>
              </Link>
              <h4 className="sub--title ">
                I-Extension, Plot - 2475 <br /> Bashundhara R/A , Dhaka
              </h4>
            </div>

            {/* left thumb  */}
            <div className="group relative col-span-2  cursor-pointer font-poiret">
              <img
                className=" aspect-21/9 object-cover"
                src={featured2}
                alt=""
              />
              <div class="bg-blur absolute top-0 left-0 hidden h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500 sm:flex">
                <h2 class="project--title-btn">Urbanica</h2>
                <Link
                  to="/project"
                  class="mt-5 rounded-full bg-white px-8 py-3 duration-300 hover:bg-stone-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 "
                  href="#"
                >
                  Project Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section  */}
        <div className=" aspect-video lg:mx-20   ">
          <ReactPlayer
            url="https://youtu.be/sJnr0l592PI"
            width="100%"
            height="80%"
            controls={true}
            muted={false}
          />
        </div>

        {/* Footprints Section  */}
        <div className="mb-32 grid  grid-cols-1 gap-2  bg-neutral-300 md:grid-cols-3        ">
          <div className="section--spacing-x heading--one   flex items-center py-6    font-bold   uppercase tracking-wider text-secondary  ">
            FOOTPRINTS
          </div>

          <div className=" md:col-span-2">
            <div className="relative h-[400px] overflow-hidden   bg-gray-300 lg:h-[430px]   xl:h-[580px] ">
              <iframe
                src="https://www.google.com.qa/maps/d/u/0/embed?mid=1vInsFJilsulIcidRH45aOFEZOAJ_qv8&ehbc=2E312F"
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
