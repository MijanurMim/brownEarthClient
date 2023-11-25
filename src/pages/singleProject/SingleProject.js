import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player";

import "./SingleProject.css";

import cover from "../../resources/projectUrbanica/8.jpg";

import { motion, useAnimation } from "framer-motion";

import projectImage2 from "../../resources/projectUrbanica/2.jpg";
import projectImage6 from "../../resources/projectUrbanica/3.jpg";
import projectImage8 from "../../resources/projectUrbanica/4.jpg";
import projectImage7 from "../../resources/projectUrbanica/5.jpg";
import projectImage4 from "../../resources/projectUrbanica/6.jpg";
import projectImage5 from "../../resources/projectUrbanica/7.jpg";
import projectImage3 from "../../resources/projectUrbanica/8.jpg";

import brochure from "../../resources/dummy.pdf";

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
          src={cover}
          alt="..."
        />
      </div>

      {/* Project Description  */}
      <div className="section--spacing-x  mt-20 grid grid-cols-1 gap-6  text-primary     lg:mx-20 xl:grid-cols-3">
        {/* Left Section  */}
        <div className="d-flex justify-items-start ">
          <h4 className="font-oswald text-xl uppercase">brownearth</h4>

          <h2 className="heading--xxxl text-secondary">urbanica</h2>

          <h4 className="font-oswald text-xl ">
            I-Extension, Plot - 2475 <br /> Bashundhara R/A , Dhaka
          </h4>
        </div>

        {/* Right Section  */}
        <div className="description--styles xl:col-span-2">
          <p>
            Introducing "Brownearth Urbanica," an exceptional residential
            project located within the burgeoning extension of the Bashundhara
            residential area in Dhaka, Bangladesh. This development is a
            testament to contemporary urban living, where modern architecture
            and high-quality finishing materials come together to create a haven
            of sophistication and luxury. Situated in a meticulously planned
            area, residents of Brownearth Urbanica will enjoy the utmost
            convenience, with all kinds of civic facilities within easy reach.
            This project not only embodies the spirit of innovation and
            aesthetic elegance but also underscores its commitment to providing
            a superior lifestyle experience in the heart of Dhaka. Brownearth
            Urbanica is set to redefine urban living and become the epitome of
            refined living in this vibrant and dynamic city.
          </p>
        </div>
      </div>

      {/* Project Highlights  */}
      <div className="text-oswald  section--spacing-x  section--spacing-y    grid grid-cols-1  gap-6   font-oswald lg:grid-cols-3">
        {/* Left section  */}
        <div className="flex flex-col items-start justify-start gap-4">
          <div>
            <h2 className="font-semi text-3xl uppercase text-secondary">
              project highlights
            </h2>
          </div>

          <div className="list-outside  lg:mt-10">
            <p className="text-xl font-light lg:font-normal">
              <span className="">Project : </span>
              <span className="text-secondary">Residential</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="">Number of apartments : </span>
              <span className=" text-secondary">8</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="">Size of apartments : </span>
              <span className=" text-secondary">1600 sft (approximately)</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="">Number of car parkings : </span>
              <span className=" text-secondary">10 nos.</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="">RAJUK approval no : </span>
              <span className=" text-secondary"></span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="">Land area : </span>
              <span className=" text-secondary">5 Katha</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="">Architectural Firm : </span>
              <span className=" text-secondary">Array Architects</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="">Facing : </span>
              <span className=" text-secondary">North</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="">Front Road : </span>
              <span className=" text-secondary">25 Feet</span>
            </p>
          </div>
        </div>
        {/* Right section  */}
        <div className=" md:col-span-2">
          <div className="relative    aspect-21/9 overflow-hidden lg:aspect-video xl:aspect-21/9  ">
            <ReactPlayer
              url="https://youtu.be/sJnr0l592PI"
              width="100%"
              height="100%"
              controls={true}
              muted={false}
            />
          </div>
        </div>
      </div>

      {/* Project Gallary  */}
      <div className="  section--spacing-y lg:mx-20 ">
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

      {/* Footprints Section  */}
      <div className="mb-32 grid   grid-cols-1 gap-2    bg-neutral-300  md:grid-cols-3     ">
        <div className=" section--spacing-x  heading--one  flex items-center py-6      uppercase tracking-wider text-white  ">
          {/* Button  */}
          <button className="rounded bg-transparent py-2 px-4  text-secondary hover:bg-gray-200">
            <a
              href={brochure}
              download="brochure.pdf"
              target="_blank"
              className="inline-flex items-center gap-2"
              rel="noreferrer"
            >
              <svg
                class="mr-2 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>BROCHURE</span>
            </a>
          </button>
        </div>
        <div className=" md:col-span-2">
          <div className="relative col-span-2 aspect-21/9    overflow-hidden   ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3650.337286454815!2d90.4424274!3d23.8066024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7dda78ef333%3A0x56f7b08d7d647785!2sBrownearth%20Urbanica!5e0!3m2!1sen!2sbd!4v1700916656871!5m2!1sen!2sbd"
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
    </motion.div>
  );
};

export default SingleProject;
