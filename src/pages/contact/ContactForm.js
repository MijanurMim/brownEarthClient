import React from "react";

const ContactForm = () => {
  return (
    <div className="dark:bg-slate-600">
      <div className="body-font relative text-gray-600 dark:text-slate-200">
        <div className="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap">
          <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10  dark:bg-slate-600 sm:mr-10 md:w-1/2 lg:w-2/3">
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
            <div className="relative flex flex-wrap rounded bg-white py-6 shadow-md dark:bg-slate-600">
              <div className="px-6 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900 dark:text-slate-200">
                  PROJECT LOCATION
                </h2>
                <p className="mt-1">
                  Plot-2475, Block -I (Extension) Bashundhara, Dhaka-1229.
                </p>
              </div>
              <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900 dark:text-slate-200">
                  EMAIL
                </h2>
                <a className="leading-relaxed text-indigo-400">
                  brownearthltd@gmail.com
                </a>
                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900 dark:text-slate-200">
                  PHONE
                </h2>
                <p className="leading-relaxed">01844-520202</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col bg-white dark:bg-slate-600  md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
            <h2 className="title-font mb-1 text-3xl font-medium text-stone-700 dark:text-slate-200">
              CONTACT US
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600  dark:text-slate-200">
              Get Our 24/7 support
            </p>
            <div className="relative mb-4">
              <label
                for="name"
                className="text-sm leading-7 text-gray-600  dark:text-slate-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 "
              />
            </div>
            <div className="relative mb-4">
              <label
                for="email"
                className="text-sm leading-7 text-gray-600  dark:text-slate-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="message"
                className="text-sm leading-7 text-gray-600  dark:text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>
            <button className="rounded border-0 bg-stone-500 py-2  px-6 text-lg text-white duration-300 hover:bg-indigo-600 focus:outline-none dark:bg-slate-500 dark:hover:bg-slate-700">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
