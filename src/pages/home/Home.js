import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import featured2 from "../../resources/projectUrbanica/2.jpg";
import featured3 from "../../resources/projectUrbanica/4.jpg";
import featured1 from "../../resources/urbanica2.jpg";
import sal from "sal.js";

import Slider from "../../components/slider/Slider";

const Home = () => {
  useEffect(() => {
    sal({
      threshold: 1,
      once: false,
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
          // data-sal="slide-right"
          // data-sal-delay="300"
          // data-sal-duration="1200"
          // data-sal-easing="easeInOutSine"
          >
            <h1 className="text-4xl uppercase">
              Building a legacy of excellence
            </h1>
          </div>
          <div className="mt-16 grid grid-cols-4">
            <div></div>
            <div
              className="col-span-3"
              // data-sal="slide-left"
              // data-sal-delay="400"
              // data-sal-duration="1300"
              // data-sal-easing="easeInOutSine"
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

        {/* Features Work Section  */}
        <div className="m-10  font-poiret lg:mx-20  lg:my-10        lg:gap-6  ">
          <div className="mt-36 mb-12">
            <h1 className="text-4xl uppercase">AVAILABLE PROJECTS FOR SALE</h1>
          </div>

          {/* Project Cards  */}
          <div className="grid  grid-cols-1 gap-5 lg:grid-cols-3">
            {" "}
            <div
              className="group relative cursor-pointer"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1200"
              data-sal-easing="easeInOutSine"
            >
              <div>
                {" "}
                <img className=" object-cover" src={featured1} alt="img" />
                <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
                  <h1 class=" text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
                    Brownearth Urbanica
                  </h1>
                  <Link
                    to="/projects"
                    class="mt-5 rounded-full bg-white px-8 py-3 duration-300 hover:bg-stone-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 "
                    href="#"
                  >
                    Project Details
                  </Link>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-oswald text-xl uppercase">brownearth</h4>
                <h1 className="text-6xl uppercase text-secondary">urbanica</h1>
                <h4 className="font-oswald text-xl ">
                  Bashundhara R/A, I-Extension
                </h4>
              </div>
            </div>
            <div
              className="group relative cursor-pointer"
              data-sal="slide-up"
              data-sal-delay="400"
              data-sal-duration="1200"
              data-sal-easing="easeInOutSine"
            >
              <div>
                {" "}
                <img className=" object-cover" src={featured2} alt="img" />
                <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
                  <h1 class=" text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
                    Brownearth Courtside
                  </h1>
                  <Link
                    to="/projects"
                    class="mt-5 rounded-full bg-white px-8 py-3 duration-300 hover:bg-stone-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 "
                    href="#"
                  >
                    Project Details
                  </Link>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-oswald text-xl uppercase">brownearth</h4>
                <h1 className="text-6xl uppercase text-secondary">
                  {" "}
                  courtside
                </h1>
                <h4 className="font-oswald text-xl ">
                  Jalshiri Abashon, Sector 11
                </h4>
              </div>
            </div>
            <div
              className="group relative cursor-pointer"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="1200"
              data-sal-easing="easeInOutSine"
            >
              <div>
                {" "}
                <img className=" object-cover" src={featured3} alt="img" />
                <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
                  <h1 class=" text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
                    Brownearth Benchmark
                  </h1>
                  <Link
                    to="/projects"
                    class="mt-5 rounded-full bg-white px-8 py-3 duration-300 hover:bg-stone-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 "
                    href="#"
                  >
                    Project Details
                  </Link>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-oswald text-xl uppercase">brownearth</h4>
                <h1 className="text-6xl uppercase text-secondary">benchmark</h1>
                <h4 className="font-oswald text-xl ">
                  Jalshiri Abashon, Sector 16
                </h4>
              </div>
            </div>
          </div>
        </div>

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
