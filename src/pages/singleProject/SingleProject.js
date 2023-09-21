import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player";

import "./SingleProject.css";

import { motion, useAnimation } from "framer-motion";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import { BsFillCarFrontFill } from "react-icons/bs";
import { RiHomeGearFill } from "react-icons/ri";
import { RxRocket } from "react-icons/rx";
import { SiAdguard } from "react-icons/si";
import singleProjectFloorPlan from "../../resources/floorplan.jpg";

import { default as aboutCover } from "../../resources/projectUrbanica/1.jpg";

import projectImage2 from "../../resources/projectUrbanica/2.jpg";
import projectImage6 from "../../resources/projectUrbanica/3.jpg";
import projectImage8 from "../../resources/projectUrbanica/4.jpg";
import projectImage7 from "../../resources/projectUrbanica/5.jpg";
import projectImage4 from "../../resources/projectUrbanica/6.jpg";
import projectImage5 from "../../resources/projectUrbanica/7.jpg";
import projectImage3 from "../../resources/projectUrbanica/8.jpg";
import singleProjectPortrait from "../../resources/urbanicaPotrait.jpg";
// import {} from "framer-motion/dist/framer-motion.dev";
import { useInView } from "react-intersection-observer";

const images = [
  {
    original: projectImage2,
    thumbnail: projectImage2,
  },
  {
    original: projectImage6,
    thumbnail: projectImage6,
  },
  {
    original: projectImage8,
    thumbnail: projectImage8,
  },
  {
    original: projectImage7,
    thumbnail: projectImage7,
  },
  {
    original: projectImage4,
    thumbnail: projectImage4,
  },
  {
    original: projectImage5,
    thumbnail: projectImage5,
  },
  {
    original: projectImage3,
    thumbnail: projectImage3,
  },
  {
    original: projectImage2,
    thumbnail: projectImage2,
  },
  {
    original: projectImage6,
    thumbnail: projectImage6,
  },
  {
    original: projectImage8,
    thumbnail: projectImage8,
  },
  {
    original: projectImage7,
    thumbnail: projectImage7,
  },
  {
    original: projectImage4,
    thumbnail: projectImage4,
  },
  {
    original: projectImage5,
    thumbnail: projectImage5,
  },
  {
    original: projectImage3,
    thumbnail: projectImage3,
  },
  {
    original: projectImage5,
    thumbnail: projectImage5,
  },
  {
    original: projectImage3,
    thumbnail: projectImage3,
  },
  {
    original: projectImage5,
    thumbnail: projectImage5,
  },
  {
    original: projectImage3,
    thumbnail: projectImage3,
  },
  {
    original: projectImage5,
    thumbnail: projectImage5,
  },
  {
    original: projectImage3,
    thumbnail: projectImage3,
  },
];

const SingleProject = () => {
  // Swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
      <div className="group relative ">
        <img
          className="h-64 w-full object-cover lg:h-[550px]"
          src={aboutCover}
          alt="..."
        />
      </div>

      {/* Project Description  */}
      <div className="mx-10 mt-10 grid grid-cols-1 text-primary       lg:mx-20 xl:grid-cols-3">
        {/* Left Section  */}
        <div className="d-flex justify-items-start ">
          <h4 className="font-oswald text-xl uppercase">brownearth</h4>

          <h1 className="font-poiret text-6xl uppercase text-secondary">
            urbanica
          </h1>

          <h4 className="font-oswald text-xl ">
            I-Extension, Plot - 2475 <br /> Bashundhara R/A , Dhaka
          </h4>
        </div>

        {/* Right Section  */}
        <div className="text-justify font-poiret text-xl xl:col-span-2">
          <p>
            BrownEarth Developments Ltd. , your premier partner in innovative
            building development solutions. With a steadfast commitment to
            excellence, creativity, and sustainability, we are at the forefront
            of shaping skylines and communities through our exceptional
            projects.At BrownEarth Developments Ltd. we believe that buildings
            are more than just structures; they are living spaces that should
            inspire, elevate, and transform lives. With a team of passionate
            architects, engineers, designers, and construction experts, we
            embark on each project as a unique journey, blending cutting-edge
            technology with timeless design principles. BrownEarth Developments
            Ltd. , your premier partner in innovative building development
            solutions. With a steadfast commitment to excellence, creativity,
            and sustainability, we are at the forefront of shaping skylines and
            communities through our exceptional projects.At BrownEarth
            Developments Ltd. we believe that buildings are more than just
            structures; they are living spaces that should inspire, elevate, and
            transform lives. With a team of passionate architects, engineers,
            designers, and construction experts, we embark on each project as a
            unique journey, blending cutting-edge technology with timeless
            design principles.
          </p>
        </div>
      </div>

      {/* Project Highlights  */}
      <div className="text-oswald mx-10  my-32 mb-6    grid grid-cols-1  font-oswald  lg:mx-20 xl:grid-cols-3 ">
        {/* Left section  */}
        <div className="flex flex-col items-start justify-center">
          <div>
            {" "}
            <h1 className="font-semi text-3xl uppercase text-secondary">
              project highlights
            </h1>
          </div>

          <div>
            <ul className="mt-10  list-outside">
              <li className="text-xl">
                <span className="font-bold">Project : </span>
                <span className="font-normal text-secondary">Residential</span>
              </li>

              <li className="text-xl">
                <span className="font-bold">Number of apartments : </span>
                <span className="font-normal text-secondary">8</span>
              </li>

              <li className="text-xl">
                <span className="font-bold">Size of apartments : </span>
                <span className="font-normal text-secondary">
                  1600 sft (approximately)
                </span>
              </li>

              <li className="text-xl">
                <span className="font-bold">Number of car parkings : </span>
                <span className="font-normal text-secondary">10 nos.</span>
              </li>

              <li className="text-xl">
                <span className="font-bold">RAJUK approval no : </span>
                <span className="font-normal text-secondary"></span>
              </li>

              <li className="text-xl">
                <span className="font-bold">Land area : </span>
                <span className="font-normal text-secondary">5 Katha</span>
              </li>

              <li className="text-xl">
                <span className="font-bold">Architectural Firm : </span>
                <span className="font-normal text-secondary">
                  Array Architects
                </span>
              </li>

              <li className="text-xl">
                <span className="font-bold">Facing : </span>
                <span className="font-normal text-secondary">North</span>
              </li>

              <li className="text-xl">
                <span className="font-bold">Front Road : </span>
                <span className="font-normal text-secondary">25 Feet</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Right section  */}
        <div className=" xl:col-span-2">
          {" "}
          <div className="relative    h-[580px] overflow-hidden    ">
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

      {/* Project Gallary  */}
      <div className="mx-10 my-32 lg:mx-20  ">
        <ImageGallery
          items={images}
          slideInterval={4000}
          showNav={false}
          showBullets={true}
          autoPlay={true}
          disableSwipe={true}
          slideOnThumbnailOver={true}
          showPlayButton={false}
        />
      </div>

      {/* Project Video */}
      <div className="mx-10 my-32 grid  grid-cols-3 items-center lg:mx-20">
        <div className="">
          <img src={singleProjectFloorPlan} alt="img" className="h-100" />
        </div>

        <div className="col-span-2 aspect-21/9    ">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=lC6b85dQQCI"
            width="100%"
            height="100%"
            controls={true}
            muted={false}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
