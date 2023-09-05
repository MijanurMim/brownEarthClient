import React, { useState } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import logo from "../../resources/logo-transparent.png";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="  ">
      <div className=" mr-10  items-end justify-between py-6     md:flex  lg:mx-20   ">
        {/* Navbar title and logo  */}
        <div className="ml-10 flex cursor-pointer  items-start justify-start  lg:ml-0   ">
          <span className="  ">
            <img src={logo} alt="" className=" w-24 object-cover  md:w-32" />
          </span>
        </div>

        {/* Navbar Icon  */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-10 top-6 mt-4  cursor-pointer text-3xl transition-all  md:hidden "
        >
          {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
          {open ? <IoCloseSharp /> : <IoMenuSharp />}
        </div>

        <div className=" font-oswald ">
          {/* Navbar Items  */}
          <ul
            className={`lg-px-5 absolute  z-[-1] w-full  px-10 pb-12  transition-all  duration-500 ease-in  md:static   md:z-auto md:flex md:items-center md:space-x-1 md:pb-0 lg:space-x-8 
        ${open ? "top-20 opacity-100" : "top-[-800px]"} md:opacity-100  `}
          >
            <li>
              <Link to="/" className="nav-hover-effect " aria-current="page">
                HOME
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-hover-effect ">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-hover-effect ">
                PROJECTS
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-hover-effect ">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Slider  */}
    </div>
  );
};

export default Navbar;
