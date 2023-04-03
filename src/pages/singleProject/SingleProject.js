import React, { useEffect } from "react";

import { AiOutlinePoweroff } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import { BsFillCarFrontFill } from "react-icons/bs";
import { RiHomeGearFill } from "react-icons/ri";
import { RxRocket } from "react-icons/rx";
import { SiAdguard } from "react-icons/si";
import singleProjectFloorPlan from "../../resources/floorplan.jpg";
import singleProjectCover from "../../resources/singleProjectCover.jpg";
import singleProjectPortrait from "../../resources/urbanicaPotrait.jpg";

import { motion, useAnimation } from "framer-motion";
import projectImage1 from "../../resources/project/1.jpg";
import projectImage4 from "../../resources/project/10.jpg";
import projectImage6 from "../../resources/project/11.jpg";
import projectImage8 from "../../resources/project/12.jpg";
import projectImage7 from "../../resources/project/13.jpg";
import projectImage2 from "../../resources/project/2.jpg";
import projectImage3 from "../../resources/project/3.jpg";
import projectImage5 from "../../resources/project/4.jpg";
// import {} from "framer-motion/dist/framer-motion.dev";
import { useInView } from "react-intersection-observer";

const SingleProject = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView, animation]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="dark:bg-slate-600"
    >
      {/* top section  */}
      <div className="mx-10 grid grid-cols-1      gap-6  md:grid-cols-2  lg:mx-36">
        <div className=" flex  flex-col justify-center text-left  ">
          <p className="text-2xl uppercase text-stone-600 dark:text-slate-200 lg:text-4xl">
            Brownearth Urbanica
          </p>
          <p className="text-lg text-stone-700 dark:text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non
            accusamus voluptatum, aperiam, debitis blanditiis sit culpa maiores
            nam iste nobis tempora nihil tempore vel asperiores dolore ipsam
            nesciunt earum.
          </p>
        </div>
        <div>
          <img src={singleProjectCover} alt="" className="object-cover" />
        </div>
      </div>

      {/* Project Details section  */}
      <div className=" m-10 mt-20 grid grid-cols-1 gap-1 md:grid-cols-2   lg:mx-36 lg:gap-10 ">
        <div className=" flex  flex-col justify-center text-left   ">
          <p className="text-3xl uppercase text-stone-600 dark:text-slate-200  lg:text-4xl ">
            Project Details
          </p>
          <p className="text-lg font-light text-stone-600 dark:text-slate-200 ">
            Brownearth Urbanica
          </p>
          <br />

          <p className=" text-lg font-medium text-stone-600	 dark:text-slate-200">
            Status: Upcoming{" "}
          </p>
          <p className=" text-lg font-medium text-stone-600	 dark:text-slate-200">
            Launch:{" "}
          </p>
          <p className="text-lg text-stone-600 dark:text-slate-200">
            Completion:{" "}
          </p>
          <br />

          <p className="text-lg font-light text-stone-700 dark:text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non
            accusamus voluptatum, aperiam, debitis blanditiis sit culpa maiores
            nam iste nobis tempora nihil tempore vel asperiores dolore ipsam
            nesciunt earum.
          </p>
          <br />

          <p className=" text-lg font-medium	 text-stone-600 dark:text-slate-200">
            Total <div className="font-bold">8</div> Units
          </p>
          <p className="text-lg text-stone-600 dark:text-slate-200">
            <div className="font-bold">4,500 sft</div> (Approx.)
          </p>
        </div>
        <div className="mt-10 flex justify-end">
          <img
            className="h-full w-full lg:h-[85%]  lg:w-[90%]"
            src={singleProjectPortrait}
            alt=""
          />
        </div>
      </div>

      {/* Facilities Section  */}
      <div className=" m-10 text-left text-stone-600 dark:text-slate-200  lg:mx-36   ">
        <p className=" text-3xl uppercase  lg:text-4xl">
          Some Of The Facilities
        </p>

        <div className="m-10 grid grid-cols-1  gap-10  md:ml-36 lg:grid-cols-2">
          <div className="flex-start flex items-center justify-start ">
            <div className="mr-6 rounded-full border border-slate-800 p-2 text-4xl text-stone-500 dark:border-slate-200 dark:text-slate-200">
              <RiHomeGearFill />
            </div>
            <div className="text-xl md:text-2xl ">Designer Interiors</div>
          </div>

          <div className="flex items-center justify-start">
            <div className="mr-6  rounded-full border border-slate-800 p-2  text-4xl text-stone-500 dark:border-slate-200 dark:text-slate-200">
              <SiAdguard />
            </div>
            <div className="text-xl md:text-2xl">High Security</div>
          </div>

          <div className="flex items-center justify-start">
            <div className="mr-6 rounded-full border border-slate-800 p-2 text-4xl text-stone-500 dark:border-slate-200 dark:text-slate-200">
              <RxRocket />
            </div>
            <div className="text-xl md:text-2xl">High Speed Lift</div>
          </div>

          <div className="flex items-center justify-start">
            <div className="mr-6 rounded-full border border-slate-800 p-2 text-4xl text-stone-500 dark:border-slate-200 dark:text-slate-200">
              <BsFillCarFrontFill />
            </div>
            <div className="text-xl md:text-2xl">Spacious Parking Spaces</div>
          </div>

          <div className="flex items-center justify-start ">
            <div className="mr-6 rounded-full border border-slate-800 p-2 text-4xl text-stone-500 dark:border-slate-200 dark:text-slate-200">
              <AiOutlinePoweroff />
            </div>
            <div className="text-xl md:text-2xl">100% Power Backup</div>
          </div>

          <div className="flex items-center justify-start ">
            <div className="mr-6 rounded-full border border-slate-800 p-2 text-4xl text-stone-500 dark:border-slate-200 dark:text-slate-200">
              <BiCctv />
            </div>
            <div className="text-xl md:text-2xl">CCTV Monitoring System</div>
          </div>
        </div>
      </div>

      {/* Floor Plan Section  */}
      <div className="m-10  flex-col items-center justify-start	 text-left text-stone-600 dark:text-slate-200 md:m-28  lg:mx-36">
        <p className="text-3xl uppercase text-stone-600 dark:text-slate-200   lg:text-4xl ">
          Floor Plan
        </p>
        <div className="">
          <img className="w-full" src={singleProjectFloorPlan} alt="..." />
        </div>
      </div>

      {/* Single Project Masonry Section  */}
      <div
        ref={ref}
        className="m-10   flex-col items-center justify-start	 text-left text-stone-600 dark:text-slate-200 md:m-28  lg:mx-36"
      >
        <p className="mb-6 text-3xl uppercase text-stone-600 dark:text-slate-200 lg:text-4xl ">
          project gallery
        </p>

        <motion.div
          animate={animation}
          className="columns-1 gap-4    md:columns-3"
        >
          <img
            className="mb-4 aspect-video w-full object-cover"
            src={projectImage1}
            alt="..."
          />

          <img
            className="mb-4 aspect-square w-full object-cover "
            src={projectImage3}
            alt="..."
          />
          <img
            className="mb-4 aspect-video w-full object-cover "
            src={projectImage4}
            alt="..."
          />
          <img
            className="mb-4 aspect-square w-full object-cover "
            src={projectImage5}
            alt="..."
          />

          <img
            className="mb-4 aspect-square w-full object-cover "
            src={projectImage7}
            alt="..."
          />
          <img
            className="mb-4 aspect-video w-full  object-cover"
            src={projectImage8}
            alt="..."
          />
          <img
            className="mb-4 aspect-square w-full object-cover "
            src={projectImage2}
            alt="..."
          />
          <img
            className="mb-4 aspect-video w-full object-cover "
            src={projectImage6}
            alt="..."
          />
        </motion.div>
      </div>

      {/* Project Location Section  */}

      <div className="relative m-10 grid h-96 grid-cols-1 overflow-hidden rounded-lg bg-gray-300 p-10 lg:mx-36 lg:h-[580px] ">
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
    </motion.div>
  );
};

export default SingleProject;
