import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import aboutCover from "../../resources/humaira-bashir/humaira-10.jpg";

// import {} from "framer-motion/dist/framer-motion.dev";
import { useInView } from "react-intersection-observer";
import aboutThumb from "../../resources/humaira-bashir/humaira-22.jpg";

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

        <div className=" tracking-in-expand section--spacing-x hero--text-inner backdrop-blur-sm ">
          <p className="tracking-in-expand   heading--xxxl  ">About us</p>
        </div>
      </div>

      <div className="section--spacing-x section--spacing-y grid grid-cols-1 gap-y-6 sm:gap-x-10  md:grid-cols-3 lg:gap-y-0">
        <div className="">
          <img src={aboutThumb} alt="img" />
        </div>

        <div className=" md:col-span-2">
          <p className="description--styles ">
            BrownEarth Developments Ltd. stands as a distinguished and premier
            partner in the realm of innovative building development solutions.
            The company's core values of excellence, creativity, and
            sustainability are the driving forces behind its leading position,
            placing it at the forefront of shaping skylines and communities
            through exceptional projects.
            <br />
            <br />
            At the heart of BrownEarth's philosophy is a profound belief that
            buildings transcend their functional roles; they are dynamic living
            spaces that hold the potential to inspire, elevate, and transform
            lives. This perspective is a guiding principle that permeates every
            aspect of the company's work.
            <br />
            <br />
            The strength of BrownEarth lies in its dedicated team of passionate
            professionals, including architects, engineers, designers, and
            construction experts. Together, they approach each project as a
            unique journey, infusing it with creativity and a commitment to
            excellence. The fusion of cutting-edge technology and timeless
            design principles distinguishes BrownEarth's projects, resulting in
            spaces that not only meet practical needs but also evoke a sense of
            aesthetic brilliance.
            <br /> <br />
            A key pillar of BrownEarth's identity is its unwavering commitment
            to sustainability. The company recognizes the significant impact
            that buildings can have on the environment and, in response,
            incorporates eco-friendly practices and materials into its projects.
            By doing so, BrownEarth strives to create developments that are not
            only visually stunning but also environmentally conscious, leaving a
            positive legacy for future generations.
            <br /> <br />
            In essence, BrownEarth Developments Ltd. is more than a builder; it
            is a visionary partner. The company's approach to each project is
            characterized by a dedication to crafting spaces that go beyond the
            ordinary, spaces that inspire and uplift communities. As a result,
            BrownEarth's portfolio is a testament to its ability to seamlessly
            blend state-of-the-art technology with enduring design principles,
            creating living environments that stand as timeless works of art.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
