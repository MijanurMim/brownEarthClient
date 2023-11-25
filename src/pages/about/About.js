import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import aboutCover from "../../resources/humaira-bashir/humaira-10.jpg";
import aboutCover3 from "../../resources/humaira-bashir/humaira-4.jpg";
import aboutCover2 from "../../resources/humaira-bashir/humaira-5.jpg";
// import {} from "framer-motion/dist/framer-motion.dev";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
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
      className="font-oswald dark:bg-slate-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* about cover section  */}
      <div className="group relative ">
        <img
          className="h-64 w-full object-cover grayscale lg:h-[550px]"
          src={aboutCover}
          alt="..."
        />
      </div>

      {/* Our Mission section  */}
      <div className="m-6  lg:m-20 2xl:mx-20">
        <div className="my-6 flex flex-col">
          <h2 className="heading--one  font-semibold text-secondary ">
            Total Quality
          </h2>
          <p className="text-xl font-light lg:text-2xl ">
            Behind this success is Total Quality Management
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6  text-xl dark:text-slate-200 lg:grid-cols-3">
          <p className="description--styles">
            Brownearth Developments Ltd.an energetic and contemporary future in
            property services. We like to think different and be different, but
            we combine that with our traditional and familiar practices of
            providing no nonsense, down to earth advice and service.
          </p>

          <p className="description--styles">
            We offer an advanced and innovative approach towards real estate and
            how to market, lease and sell property using new and progressive
            marketing platforms and methods, particularly within the
            ever-expanding digital era of marketing and all that it has to
            offer.
          </p>

          <p className="description--styles">
            Brownearth Developments Ltd. we love talking about real estate and
            connecting with people from all walks of life. We would invite
            anyone to drop in, speak to our team and see what we are all about!
          </p>
        </div>
      </div>

      <div>
        <img
          className="h-64 w-full object-cover grayscale  lg:h-[550px]"
          src={aboutCover2}
          alt=""
        />
      </div>

      {/* Design Excellence section  */}
      <div ref={ref} className="m-6  lg:m-20 2xl:m-20">
        <motion.div animate={animation} className="my-6 flex flex-col">
          <h2 className="heading--one  font-semibold text-secondary ">
            Design Excellence
          </h2>
          <p className="text-xl font-light lg:text-2xl ">
            Our buildings are characterized by their avant-garde design with
            contemporary lines and a clean look
          </p>
        </motion.div>

        <motion.div
          animate={animation}
          className="grid grid-cols-1 gap-6  font-oswald text-xl dark:text-slate-200 lg:grid-cols-3"
        >
          <p className="description--styles">
            Brownearth Developments Ltd.an energetic and contemporary future in
            property services. We like to think different and be different, but
            we combine that with our traditional and familiar practices of
            providing no nonsense, down to earth advice and service.
          </p>
          <p className="description--styles">
            We offer an advanced and innovative approach towards real estate and
            how to market, lease and sell property using new and progressive
            marketing platforms and methods, particularly within the
            ever-expanding digital era of marketing and all that it has to
            offer.
          </p>
          <p className="description--styles">
            Brownearth Developments Ltd. we love talking about real estate and
            connecting with people from all walks of life. We would invite
            anyone to drop in, speak to our team and see what we are all about!
          </p>
        </motion.div>
      </div>

      <div className="section--spacing-y">
        <img
          className="h-64 w-full object-cover grayscale  lg:h-[550px]"
          src={aboutCover3}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default About;
