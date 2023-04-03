import React from "react";
import { BiLandscape } from "react-icons/bi";
import { TbBrandGoogleBigQuery, TbHomeDollar } from "react-icons/tb";
import Slider from "../../components/slider/Slider";

import featured2 from "../../resources/project/urbanica.1.jpg";
import featured1 from "../../resources/project/urbanica2.jpg";

import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dark:bg-slate-600">
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
      <div className="m-10  grid grid-cols-1 gap-2 lg:mx-36  lg:my-10      lg:grid-cols-4  lg:gap-6  ">
        <div className="flex text-3xl    uppercase tracking-wider text-stone-600 dark:text-slate-200   md:items-center lg:text-4xl	 ">
          FEATURED <br /> WORK
        </div>

        <div className="group relative cursor-pointer">
          <img
            className="aspect-square h-full w-full object-cover"
            src={featured1}
            alt=""
          />
          <div class="absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center bg-stone-100 opacity-0 duration-500 group-hover:h-full group-hover:opacity-100 dark:bg-slate-500">
            <h1 class="text-lg text-stone-600 dark:text-slate-200 lg:text-xl 2xl:text-2xl">
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
            src={featured2}
            alt=""
          />
          <div class="absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center bg-stone-100 opacity-0 duration-500 group-hover:h-full group-hover:opacity-100 dark:bg-slate-500">
            <h1 class="text-lg text-stone-600 dark:text-slate-200 lg:text-xl 2xl:text-2xl">
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
          <div class="absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center bg-stone-100 opacity-0 duration-500 group-hover:h-full group-hover:opacity-100 dark:bg-slate-500">
            <h1 class="text-lg text-stone-600 dark:text-slate-200 lg:text-xl 2xl:text-2xl">
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
    </div>
  );
};

export default Home;
