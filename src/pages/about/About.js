import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import aboutCover2 from "../../resources/project/1.jpg";
import aboutCover3 from "../../resources/project/3.jpg";
import aboutCover from "../../resources/slider/1.jpg";
// import {} from "framer-motion/dist/framer-motion.dev";
import { useInView } from "react-intersection-observer";

const About = () => {
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
      {/* about cover section  */}
      <div className="group relative ">
        <img
          className="h-64 w-full object-cover grayscale lg:h-[550px]"
          src={aboutCover}
          alt="..."
        />
        <div className=" absolute top-36 left-0 flex h-0 w-full flex-col items-center justify-center bg-indigo-700 duration-500  lg:top-60 ">
          <h1 className="text-3xl text-white lg:text-6xl">About Us</h1>
        </div>
      </div>

      {/* Our Mission section  */}
      <div className="m-6  lg:m-20 2xl:m-36">
        <div className="my-6 flex flex-col">
          <span className="text-4xl text-stone-600 dark:text-slate-200">
            Total Quality
          </span>
          <span className="text-lg dark:text-slate-200">
            Behind this success is Total Quality Management
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 font-light  dark:text-slate-200 lg:grid-cols-3">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            provident. Blanditiis rerum veritatis, ipsam eveniet magni
            recusandae eum, expedita a rem fugiat facere commodi aperiam.
            Maiores, commodi illum. Quibusdam, ut?
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
            nobis fuga. Animi esse quisquam, aperiam quo totam excepturi! Hic
            officia animi tempora quas explicabo suscipit nemo saepe, cum quae
            provident?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dolore maiores, sapiente omnis minima deleniti repellat impedit
            culpa temporibus, eius sint sequi voluptatum minus laboriosam
            debitis autem reprehenderit quasi fuga.
          </div>
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
      <div ref={ref} className="m-6  lg:m-20 2xl:m-36">
        <motion.div animate={animation} className="my-6 flex flex-col">
          <span className="text-4xl text-stone-600 dark:text-slate-200">
            Design Excellence
          </span>
          <span className="text-lg dark:text-slate-200">
            Our buildings are characterized by their avant-garde design with
            contemporary lines and a clean look
          </span>
        </motion.div>

        <motion.div
          animate={animation}
          className="grid grid-cols-1 gap-6 font-light  dark:text-slate-200 lg:grid-cols-3"
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            provident. Blanditiis rerum veritatis, ipsam eveniet magni
            recusandae eum, expedita a rem fugiat facere commodi aperiam.
            Maiores, commodi illum. Quibusdam, ut?
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
            nobis fuga. Animi esse quisquam, aperiam quo totam excepturi! Hic
            officia animi tempora quas explicabo suscipit nemo saepe, cum quae
            provident?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dolore maiores, sapiente omnis minima deleniti repellat impedit
            culpa temporibus, eius sint sequi voluptatum minus laboriosam
            debitis autem reprehenderit quasi fuga.
          </div>
        </motion.div>
      </div>

      <div>
        <img
          className="h-64 w-full object-cover grayscale  lg:h-[550px]"
          src={aboutCover3}
          alt=""
        />
      </div>

      <div className="m-6 lg:m-20  2xl:m-36">
        <div className="my-6 flex flex-col">
          <span className="my-4 text-4xl text-stone-600 dark:text-slate-200">
            Our Clients
          </span>
          <span className="text-md dark:text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            pariatur porro tempore alias atque magni nisi est excepturi,
            praesentium hic sunt veritatis eius accusamus amet cumque explicabo
            dolorem debitis! Placeat. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. A quaerat eveniet omnis doloribus labore expedita,
            perferendis itaque nam culpa quo voluptates veniam deleniti error
            repellat, atque iusto maxime soluta? Libero.+
          </span>
        </div>
      </div>

      {/* card overlay animation  */}
      {/* <div class="p-10">
        <div class="group relative w-96">
          <img
            class="w-full object-cover"
            src="https://www.kindacode.com/wp-content/uploads/2022/06/t-shirt-example.png"
          />
          <div class="absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center bg-indigo-700 opacity-0 duration-500 group-hover:h-full group-hover:opacity-100">
            <h1 class="text-2xl text-white">Fiction T-Shirt Store</h1>
            <a
              class="mt-5 rounded-full bg-amber-400 px-8 py-3 duration-300 hover:bg-amber-600"
              href="#"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div> */}

      {/* Our mission section  */}
      {/* <div className="containerx">
        <img src={aboutCover} alt="Avatar" className="imagex" />
        <div className="overlayx">
          <div className="textx">Hello World</div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default About;
