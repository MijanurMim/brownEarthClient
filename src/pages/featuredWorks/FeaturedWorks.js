import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import featured2 from "../../resources/projectUrbanica/2.jpg";
import featured3 from "../../resources/projectUrbanica/4.jpg";
import featured1 from "../../resources/urbanica2.jpg";
import sal from "sal.js";

const FeaturedWorks = () => {
  useEffect(() => {
    sal({
      threshold: 1,
      once: true,
    });
  }, []);
  return (
    <div>
      {/* Features Work Section  */}
      <div className="m-10  font-poiret lg:mx-20  lg:my-10        lg:gap-6  ">
        <div className="mt-36 mb-12">
          <h1 className="text-4xl uppercase">AVAILABLE PROJECTS FOR SALE</h1>
        </div>

        {/* Project Cards  */}
        <div className="grid  grid-cols-1 gap-5 lg:grid-cols-3">
          {" "}
          <div
            className="group relative cursor-pointer"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="1200"
            data-sal-easing="easeInOutSine"
          >
            <div>
              {" "}
              <img className=" object-cover" src={featured1} alt="img" />
              <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
                <h1 class=" text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
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
            <div className="mt-3">
              <h4 className="font-oswald text-xl uppercase">brownearth</h4>
              <h1 className="text-6xl uppercase text-secondary">urbanica</h1>
              <h4 className="font-oswald text-xl ">
                Bashundhara R/A, I-Extension
              </h4>
            </div>
          </div>
          <div
            className="group relative cursor-pointer"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1200"
            data-sal-easing="easeInOutSine"
          >
            <div>
              {" "}
              <img className=" object-cover" src={featured2} alt="img" />
              <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
                <h1 class=" text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
                  Brownearth Courtside
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
            <div className="mt-3">
              <h4 className="font-oswald text-xl uppercase">brownearth</h4>
              <h1 className="text-6xl uppercase text-secondary"> courtside</h1>
              <h4 className="font-oswald text-xl ">
                Jalshiri Abashon, Sector 11
              </h4>
            </div>
          </div>
          <div
            className="group relative cursor-pointer"
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-duration="1200"
            data-sal-easing="easeInOutSine"
          >
            <div>
              {" "}
              <img className=" object-cover" src={featured3} alt="img" />
              <div class="bg-blur absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100 dark:bg-slate-500">
                <h1 class=" text-lg uppercase tracking-wide text-slate-200 lg:text-xl 2xl:text-2xl">
                  Brownearth Benchmark
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
            <div className="mt-3">
              <h4 className="font-oswald text-xl uppercase">brownearth</h4>
              <h1 className="text-6xl uppercase text-secondary">benchmark</h1>
              <h4 className="font-oswald text-xl ">
                Jalshiri Abashon, Sector 16
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
