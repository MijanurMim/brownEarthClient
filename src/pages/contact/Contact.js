import React from "react";

import { motion } from "framer-motion";

import contactCover from "../../resources/slider/3.jpg";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <motion.div
      className="dark:bg-slate-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* Hero section  */}
      <div className="group relative ">
        <img
          className="h-64 w-full object-cover grayscale  lg:h-[550px]"
          src={contactCover}
          alt="..."
        />
      </div>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
