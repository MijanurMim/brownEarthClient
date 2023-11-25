import React from "react";

const ContactForm = () => {
  return (
    <div className=" dark:bg-slate-600">
      <div className="body-font relative text-gray-600 dark:text-slate-200">
        <div className="section--spacing-x section--spacing-y grid grid-cols-1 gap-12 md:grid-cols-3 ">
          <div className="relative min-h-[300px]  overflow-hidden  rounded-lg   dark:bg-slate-600 md:col-span-2  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.785001936255!2d90.3620258!3d23.7550451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bff6c75ea383%3A0x128c27b32f5fd575!2sBrownEarth%20Developments%20Ltd.!5e0!3m2!1sen!2sbd!4v1681661344052!5m2!1sen!2sbd"
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
          <div className=" flex w-full flex-col  dark:bg-slate-600  ">
            <h2 className="title-font mb-1 text-3xl font-medium text-secondary dark:text-slate-200">
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
