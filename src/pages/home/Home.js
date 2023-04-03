import React, { useEffect } from "react";
import { BiLandscape } from "react-icons/bi";
import { TbBrandGoogleBigQuery, TbHomeDollar } from "react-icons/tb";
import Slider from "../../components/slider/Slider";

import featured2 from "../../resources/urbanica1.jpg";
import featured1 from "../../resources/urbanica2.jpg";

import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
// import {} from "framer-motion/dist/framer-motion.dev";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView();
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
      <Slider />

      {/* landowner section  */}
      <div className="m-10 grid grid-cols-1 gap-4 md:grid-cols-4  lg:my-10      lg:mx-36  lg:gap-6  ">
        <div></div>
        <Link
          to="/contact"
          className="flex cursor-pointer flex-col items-center justify-center bg-stone-100 p-10   text-stone-600 shadow-lg duration-300 hover:scale-105 dark:bg-slate-500 dark:text-slate-200 2xl:p-20"
        >
          <div className="text-4xl xl:text-6xl">
            <BiLandscape />
          </div>
          <div className="xl:text-xl">LANDOWNER</div>
          <div className="text-sm">
            Realize the full potential of your Land.
          </div>
        </Link>

        <Link
          to="/contact"
          className="flex cursor-pointer flex-col items-center justify-center bg-stone-100 p-6  text-stone-600 shadow-lg duration-300 hover:scale-105 dark:bg-slate-500 dark:text-slate-200"
        >
          <div className="text-6xl">
            <TbHomeDollar />
          </div>
          <div className="text-xl">BUYER</div>
          <div className="text-sm">Let us show you the possibilities.</div>
        </Link>

        <Link
          to="contact"
          className="flex cursor-pointer flex-col items-center justify-center bg-stone-100 p-6  text-stone-600 shadow-lg duration-300 hover:scale-105 dark:bg-slate-500 dark:text-slate-200"
        >
          <div className="text-6xl">
            {" "}
            <TbBrandGoogleBigQuery />
          </div>
          <div className="text-xl">OTHERS</div>
          <div className="text-sm"> Get in touch with us. </div>
        </Link>
      </div>

      {/* Features Work Section  */}
      <div
        ref={ref}
        className="m-10  grid grid-cols-1 gap-2 lg:mx-36  lg:my-10      lg:grid-cols-4  lg:gap-6  "
      >
        <div className="flex text-3xl    uppercase tracking-wider text-stone-600 dark:text-slate-200   md:items-center lg:text-4xl	 ">
          FEATURED <br /> WORK
        </div>

        <motion.div
          animate={animation}
          className="group relative cursor-pointer"
        >
          <img
            className="aspect-square h-full w-full object-cover"
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
        </motion.div>
        <div className="group relative cursor-pointer">
          <img
            className=" aspect-square  h-full w-full object-cover  lg:h-[400px] 2xl:h-[600px] "
            src={featured2}
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
      </div>

      {/* Video Section  */}
      <div className="m-10 grid grid-cols-1 gap-2 lg:my-10  lg:mx-36      lg:grid-cols-4  lg:gap-6  ">
        <div></div>
        <div className="col-span-3 aspect-video ">
          {" "}
          <ReactPlayer
            url="https://youtu.be/y9j-BL5ocW8"
            width="100%"
            height="100%"
            controls={true}
            muted={false}
          />
        </div>
        <div></div>
      </div>

      {/* Contact section  */}

      {/* <ContactForm /> */}
    </motion.div>
  );
};

export default Home;
