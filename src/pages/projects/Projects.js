import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import featured2 from "../../resources/projectUrbanica/2.jpg";
import featured3 from "../../resources/projectUrbanica/4.jpg";
import contactCover from "../../resources/projectUrbanica/8.jpg";
import featured1 from "../../resources/urbanica2.jpg";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView, animation]);

  return (
    <motion.div
      className="dark:bg-slate-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* Hero section  */}
      <div className="group relative ">
        <img
          className="h-64 w-full object-cover grayscale  lg:h-[550px]"
          src={contactCover}
          alt="..."
        />
      </div>

      {/* filter section  */}
      <div className="m-10  grid grid-cols-1 gap-2 lg:mx-36  lg:my-10      lg:grid-cols-3  lg:gap-6   ">
        <div>
          {" "}
          <label
            for="countries"
            class=" mb-2  text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Status
          </label>
          <select
            id="countries"
            class="  w-full  rounded border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-stone-500 focus:ring-stone-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-stone-500 dark:focus:ring-stone-500 lg:text-sm"
          >
            <option selected className="">
              All
            </option>
            <option value="US">Upcoming</option>
            <option value="CA">On Going</option>
            <option value="FR">Completed</option>
          </select>
        </div>
        <div>
          {" "}
          <label
            for="countries"
            class=" mb-2  text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Location
          </label>
          <select
            id="countries"
            class="group relative  w-full cursor-pointer rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-stone-500 focus:ring-stone-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-stone-500 dark:focus:ring-stone-500 "
          >
            <option selected>All</option>
            <option value="US">Mohammadpur</option>
            <option value="CA">Uttora</option>
            <option value="FR">Dhanmondi</option>
            <option value="DE">Bashundhara Residential</option>
            <option value="DE">Mohakhali</option>
            <option value="DE">Mirpur</option>
          </select>
        </div>
        <div>
          {" "}
          <label
            for="countries"
            class=" mb-2  text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Apartment Size
          </label>
          <select
            id="countries"
            class="group relative   w-full cursor-pointer  rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-stone-500 focus:ring-stone-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-stone-500 dark:focus:ring-stone-500 "
          >
            <option selected>All</option>
            <option value="US">1200</option>
            <option value="CA">1400</option>
            <option value="FR">1600</option>
            <option value="DE">1800</option>
            <option value="DE">2000</option>
          </select>
        </div>
      </div>

      {/***  Features Work Section  ***/}
      <div
        ref={ref}
        className="m-10  grid grid-cols-1 gap-2 lg:mx-36  lg:my-10      lg:grid-cols-3  lg:gap-6  "
      >
        <motion.div
          animate={animation}
          className="group relative cursor-pointer"
        >
          <img
            className="aspect-square h-full w-full object-cover"
            src={featured2}
            alt=""
          />
          <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
            <h1 class="text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
              Brownearth Urbanica
            </h1>
            <Link
              to="/project"
              class="mt-5 rounded-full bg-white px-8 py-3 duration-300 hover:bg-stone-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 "
              href="#"
            >
              Project Details
            </Link>
          </div>
        </motion.div>
        <div className="group relative cursor-pointer">
          <img
            className=" aspect-square  h-full w-full object-cover  lg:h-[400px] 2xl:h-[600px] "
            src={featured1}
            alt=""
          />
          <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
            <h1 class="text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
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
        <div className="group relative cursor-pointer">
          <img
            className="aspect-square h-full w-full object-cover"
            src={featured3}
            alt=""
          />
          <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
            <h1 class="text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
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
        <div className="group relative cursor-pointer">
          <img
            className="aspect-square h-full w-full object-cover"
            src={featured3}
            alt=""
          />
          <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
            <h1 class="text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
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
        <div className="group relative cursor-pointer">
          <img
            className=" aspect-square  h-full w-full object-cover  lg:h-[400px] 2xl:h-[600px] "
            src={featured1}
            alt=""
          />
          <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
            <h1 class="text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
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
        <div className="group relative cursor-pointer">
          <img
            className="aspect-square h-full w-full object-cover"
            src={featured2}
            alt=""
          />
          <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
            <h1 class="text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
              Brownearth Urbanica
            </h1>
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
    </motion.div>
  );
};

export default Projects;
