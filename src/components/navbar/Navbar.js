import React, { useEffect, useState } from "react";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

import instaicon from "../../resources/instaicon.svg";
import logo from "../../resources/logo-transparent.png";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  //  *** for browser preference ***
  // const [theme, setTheme] = useState(null);
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="sticky top-0 left-0 z-50 w-full   shadow-sm">
      <div className=" mx-36  items-center justify-between self-center  bg-white py-2 dark:bg-slate-600 md:flex    ">
        {/* Navbar title and logo  */}
        <div className="   flex cursor-pointer items-start justify-start   ">
          <span className="  ">
            <img
              src={logo}
              alt=""
              className=" w-24 object-cover dark:bg-white md:w-32"
            />
          </span>
        </div>

        {/* Navbar Icon  */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-10 top-6 cursor-pointer text-3xl text-stone-600 transition-all dark:text-slate-200 md:hidden "
        >
          {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
          {open ? <IoCloseSharp /> : <IoMenuSharp />}
        </div>

        <div className="tracking-wide ">
          {/* Navbar Items  */}
          <ul
            className={`lg-px-5 absolute  z-[-1] w-full  px-10 pb-12  transition-all  duration-500 ease-in  md:static   md:z-auto md:flex md:items-center md:space-x-1 md:pb-0 lg:space-x-8 
        ${open ? "top-24 opacity-100" : "top-[-800px]"} md:opacity-100  `}
          >
            <li>
              <Link to="/" className="nav-hover-effect " aria-current="page">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-hover-effect ">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-hover-effect ">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-hover-effect ">
                CONTACT
              </Link>
            </li>

            {/* Dropdown 
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="text-white-700 nav-hover-effect flex w-full items-center justify-start border-b py-2 pr-4 pl-3 font-medium md:w-auto  md:border-0 md:p-0  md:hover:bg-transparent"
                >
                  <span className="flex justify-start">
                    Our Services
                    <span className="">
                      <ion-icon name="chevron-down-outline"></ion-icon>
                    </span>
                  </span>
                </button>
                {/* <!-- Dropdown menu --> */}
            {/* <div
                  id="dropdownNavbar"
                  className="z-10 hidden w-44 list-none justify-start divide-y divide-gray-100 rounded bg-white text-base shadow "
                >
                  <ul className="">
                    <li>
                      <Link to={`/wedding`} className="nav-sub-items">
                        Wedding Event
                      </Link>
                    </li>
                    <li>
                      <Link to={`/birthday`} className="nav-sub-items">
                        Birthday Event
                      </Link>
                    </li>
                    <li>
                      <Link to={`/sports`} className="nav-sub-items">
                        Sports Event
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/virtual-conference`}
                        className="nav-sub-items"
                      >
                        Virtual Conference
                      </Link>
                    </li>
                    <li>
                      <Link to={`/concert`} className="nav-sub-items">
                        Concert
                      </Link>
                    </li>
                    <li>
                      <Link to={`/fashion-show`} className="nav-sub-items">
                        Fashion Show
                      </Link>
                    </li>
                  </ul> */}
            {/* </div> */}
            {/* </li>  */}

            {/* SERVICES */}
            {/* <li>
              <Link to="/contact" classNameName="nav-hover-effect">
                SERVICES
              </Link>
            </li> */}

            {/* <li>
                <Link to="/contact" className="nav-hover-effect">
                  Contact Us
                </Link>
              </li> */}
            {/* {role === "admin" && (
                <li>
                  <Link to="/admin/projects" className="nav-hover-effect">
                    Dashboard
                  </Link>
                </li>
              )} */}
          </ul>
        </div>

        {/* SOCIAL MEDIA ICONS  */}
        <div className="flex cursor-pointer justify-center gap-1 text-2xl">
          <ul className="flex items-center justify-center gap-1 ">
            <li className="text-blue-500 duration-200 hover:scale-105 hover:text-blue-600">
              <BsFacebook />
            </li>
            <li className=" duration-200 hover:scale-105">
              <img className="h-8" src={instaicon} alt="" />
            </li>
            <li className="text-green-500 duration-200 hover:scale-105 hover:text-green-600 ">
              <BsWhatsapp />
            </li>
          </ul>
          <button
            className="   duration-200 hover:scale-105 dark:bg-slate-500 dark:text-white"
            onClick={handleThemeSwitch}
          >
            {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>
        </div>

        {/* <div className=" flex cursor-pointer items-center  justify-center text-gray-300">
            {role ? (
              <button onClick={handleLogout} className="nav-hover-effect">
                Logout
                <span className="text-green-600">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
              </button>
            ) : (
              <Link to="/login" className="nav-hover-effect">
                Login
                <span className="text-green-600">
                  <ion-icon name="log-in-outline"></ion-icon>
                </span>
              </Link>
            )}
          </div> */}
      </div>
    </div>
  );
};

export default Navbar;
