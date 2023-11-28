import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player";
import { useCollapse } from "react-collapsed";

// import {UnmountClosed} from 'react-collapse';

import "./SingleProjectTwo.css";

import cover from "../../resources/humaira-bashir/humaira-17.jpg";

import { motion, useAnimation } from "framer-motion";

import projectImage1 from "../../resources/humaira-bashir/humaira-17.jpg";
import projectImage6 from "../../resources/humaira-bashir/humaira-12.jpg";
import projectImage8 from "../../resources/humaira-bashir/humaira-14.jpg";
import projectImage7 from "../../resources/humaira-bashir/humaira-17.jpg";
import projectImage9 from "../../resources/humaira-bashir/humaira-9.jpg";
import projectImage10 from "../../resources/humaira-bashir/humaira-15.jpg";

import projectImage3 from "../../resources/humaira-bashir/humaira-6.jpg";
import projectImage2 from "../../resources/humaira-bashir/humaira-8.jpg";
import projectImage4 from "../../resources/humaira-bashir/humaira-10.jpg";
import projectImage5 from "../../resources/humaira-bashir/humaira-11.jpg";

import { useInView } from "react-intersection-observer";
import brochure from "../../resources/brochure/humayra-bashir-brochure.pdf";

const images = [
  {
    original: projectImage1,
    thumbnail: projectImage1,
  },
  {
    original: projectImage2,
    thumbnail: projectImage2,
  },
  {
    original: projectImage3,
    thumbnail: projectImage3,
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
    original: projectImage6,
    thumbnail: projectImage6,
  },
  {
    original: projectImage7,
    thumbnail: projectImage7,
  },
  {
    original: projectImage8,
    thumbnail: projectImage8,
  },
  {
    original: projectImage9,
    thumbnail: projectImage9,
  },
  {
    original: projectImage10,
    thumbnail: projectImage10,
  },
];

const SingleProjectTwo = () => {
  // Swiper
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

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
      <div className="section--spacing-x mt-20 grid grid-cols-1 gap-6  text-primary     lg:mx-20 xl:grid-cols-3">
        {/* Left Section  */}
        <div className="d-flex justify-items-start ">
          <h4 className="font-oswald text-xl font-light uppercase">
            brownearth Humayra Bashir
          </h4>

          <h2 className="heading--xxxl text-secondary">Benchmark</h2>

          <h4 className="font-oswald text-xl font-light ">
            Sector -16 , Road 503 A , Plot- 001 , <br />
            Jolshiri,Abashon,Dhaka
          </h4>
        </div>

        {/* Right Section  */}
        <div className="description--styles   xl:col-span-2">
          <p className="mb-4">
            Brownearth Humayra Bashir Benchmark" is a luxury residential project
            with eight high-end apartments and one mezzanine floor, featuring
            top-quality finishing materials. Nestled in the well-planned area of
            Jolshiri Abashon in Dhaka, Bangladesh, this project enjoys a
            strategic location at the center of the eastern fringe of the DMDP
            area. It provides the closest and most convenient access from Hazrat
            Shahzalal International Airport to the RAJUK-Purbachal 300 feet Link
            Road via the Kuril Flyover, with Jolshiri Abashon situated just 1.3
            km south of RAJUK's Purbachal New Town and directly east of the
            Bashundhara Residential Area, bordered by the Balu River to the west
            and the Shitalakshya River to the east. Additionally, it connects to
            Madani Avenue, starting from the US Embassy and leading through the
            project area to the Dhaka-Sylhet bypass.
          </p>

          <p {...getCollapseProps()}>
            This project offers an array of amenities that ensure elegance,
            entertainment, and enjoyment for residents of all ages within a
            comprehensive aqua green city. The urban functionalities provided
            include well-designed thoroughfares, pedestrian-friendly walkways,
            serene lakes, urban greens, community facilities, playgrounds,
            health and sports amenities, and amusement facilities. It also
            incorporates neighborhood shopping corners and a central business
            district (CBD) for a thriving commercial and trading hub within the
            modern township. To prioritize cleanliness and environmental health,
            a solid waste management system, sewage treatment plant, and water
            treatment plant have been established, creating a green and
            self-contained urban setup. Brownearth Humayra Bashir Benchmark
            offers a unique blend of luxury, convenience, and sustainable living
            for its residents.
          </p>
          <button
            className="mt-2 text-secondary"
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Project Highlights  */}
      <div className="text-oswald  section--spacing-x  section--spacing-y    grid grid-cols-1  gap-6   font-oswald lg:grid-cols-3 ">
        {/* Left section  */}
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="font-semi text-3xl font-light uppercase text-secondary">
            project highlights
          </h2>

          <div className=" list-outside lg:mt-10 ">
            <p className=" text-xl font-light lg:font-normal">
              <span className="font-light">Project : </span>
              <span className="font-thin text-secondary">Residential</span>
            </p>

            <p className="text-xl  lg:font-normal">
              <span className="font-light">Number of apartments : </span>
              <span className="font-thin text-secondary">8</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="font-light">Size of apartments : </span>
              <span className=" font-thin text-secondary">
                2850 sft (approximately)
              </span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="font-light">Number of car parkings : </span>
              <span className=" font-thin text-secondary">10 nos.</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="font-light">RAJUK approval no : </span>
              <span className=" font-thin text-secondary"></span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="font-light">Land area : </span>
              <span className=" font-thin text-secondary">5 Katha</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="font-light">Architectural Firm : </span>
              <span className=" font-thin text-secondary">
                Array Architects
              </span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="font-light">Facing : </span>
              <span className=" font-thin text-secondary">South</span>
            </p>

            <p className="text-xl font-light lg:font-normal">
              <span className="font-light">Front Road : </span>
              <span className=" font-thin text-secondary">
                South - 35feet, West - 35feet
              </span>
            </p>
          </div>
        </div>
        {/* Right section  */}
        <div className="md:col-span-2">
          <div className="relative    aspect-21/9 overflow-hidden lg:aspect-video xl:aspect-21/9    ">
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
      <div className="   section--spacing-y lg:mx-20 ">
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
      <div className="mb-32 grid  grid-cols-1   gap-2 bg-neutral-300    md:grid-cols-3     ">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.171691515921!2d90.49111239199031!3d23.812493009500677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c9936665092d%3A0x199d7e2dc64bdd28!2sJolshiri%20Pump%20House%20Sector%2016!5e0!3m2!1sen!2sbd!4v1700916982359!5m2!1sen!2sbd"
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

export default SingleProjectTwo;
