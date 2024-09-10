import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import tendernetlogo from "../assets/tendernetlogo.png";

const ContactForm = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full min-h-screen text-[#141414] flex items-center justify-between  bg-[#ff0000] font-sans ">
        <div className="grid md:grid-cols-2 md:mx-auto mx-4 gap-28">
          {/* Text */}
          <div className="  flex flex-col items-center justify-center text-center">
            <p className="text-xl text-white font-semibold max-w-xl text-center">
              For All Your Registration
            </p>
            <h1 className=" text-white   text-4xl font-bold text-center">
              Contact Ten<span className="text-white">d</span>erNet
            </h1>

            <p className="text-xs text-white font-semibold">
              We'll get back to you as quickly as possible, Our lovely{" "}
              <span className="font-bold ">Customers</span>
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
