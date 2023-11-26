import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import featured2 from "../../resources/projectUrbanica/4.jpg";

import featured1 from "../../resources/humaira-bashir/humaira-5.jpg";
import contactCover from "../../resources/projectUrbanica/8.jpg";

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

        <div className=" tracking-in-expand section--spacing-x hero--text-inner backdrop-blur-sm ">
          <p className="tracking-in-expand   heading--xxxl  ">Projects</p>
        </div>
      </div>

      {/***  Features Work Section  ***/}
      <div className=" section--spacing-x mt-20 grid grid-cols-1  gap-y-1   md:grid-cols-3 md:gap-2 lg:mt-32 ">
        <div className="flex flex-col items-start justify-center bg-stone-200 p-4 lg:p-10 ">
          <Link to="/project-two">
            <h4 className="font-oswald text-xl uppercase">
              BROWNEARTH HOMAYRA BASHIR
            </h4>
            <h2 className="heading--one text-secondary hover:text-primary">
              BENCHMARK
            </h2>
          </Link>

          <h4 className="font-oswald text-xl ">
            Sector 16, Road 503 , <br /> Plot 001 Jolshiri Abashon
          </h4>
        </div>

        {/* left thumb  */}
        <div className="group relative col-span-2  cursor-pointer font-poiret">
          <img className=" aspect-21/9 object-cover" src={featured1} alt="" />
          <div class="bg-blur absolute top-0 left-0 hidden h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500 sm:flex">
            <h2 class="text-lg font-bold uppercase tracking-wide text-white lg:text-xl 2xl:text-2xl">
              HOMAYRA BASHIR BENCHMARK
            </h2>
            <Link
              to="/project-two"
              class="mt-5 rounded-full bg-white px-8 py-3 duration-300 hover:bg-stone-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 "
            >
              Project Details
            </Link>
          </div>
        </div>
      </div>

      <div className=" section--spacing-x mb-20 mt-10 grid grid-cols-1  gap-y-1  md:grid-cols-3 md:gap-2 lg:mb-32">
        <div className="flex flex-col items-start justify-center bg-stone-200 p-4 lg:p-10">
          <Link to="/project">
            <h4 className="font-oswald text-xl uppercase">brownearth</h4>
            <h2 className="heading--one text-secondary hover:text-primary">
              urbanica
            </h2>
          </Link>
          <h4 className="font-oswald text-xl ">
            I-Extension, Plot - 2475 <br /> Bashundhara R/A , Dhaka
          </h4>
        </div>

        {/* left thumb  */}
        <div className="group relative col-span-2  cursor-pointer font-poiret">
          <img className=" aspect-21/9 object-cover" src={featured2} alt="" />
          <div class="bg-blur absolute top-0 left-0 hidden h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500 sm:flex">
            <h2 class="text-lg font-bold uppercase tracking-wide text-white lg:text-xl 2xl:text-2xl">
              Urbanica
            </h2>
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
