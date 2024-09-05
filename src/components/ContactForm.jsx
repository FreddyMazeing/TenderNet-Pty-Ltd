import React from "react";
import companyregistration from "../assets/companyregistration.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import tendernetlogo from "../assets/tendernetlogo.png";

const ContactForm = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full min-h-screen text-[#141414] bg-white font-sans ">
        <div className="relative max-w-full min-h-screen flex flex-col items-center justify-center ">
          {/* Bg Image */}
          <div className="absolute inset-0 w-full h-full ">
            <img
              src={companyregistration}
              alt="companyregistration"
              className="w-full h-full object-cover brightness-10"
            />
          </div>
          {/* White Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30  to-white/50 z-10  "></div>
          {/* Main Text */}
          <div className="z-20 mt-20 flex flex-col items-center justify-center text-center">
            <p className="text-xl text-white font-semibold max-w-xl text-center">
              For All Your Registration
            </p>
            <h1 className=" text-white   text-4xl font-bold text-center">
              Contact Ten<span className="text-[#ff0000]">d</span>erNet
            </h1>

            <p className="text-xs text-white font-semibold">
              We'll get back to you as quickly as possible, Our lovely{" "}
              <span className="font-bold ">Customers</span>
            </p>
          </div>
          {/* Contact Form */}
          <div className="flex flex-col bg-[#ff0000]/10  shadow-md shadow-black/20 backdrop-blur-xl md:px-10 rounded-3xl   z-20 py-10 my-20">
            <div className="flex items-center justify-center mb-10">
              <img src={tendernetlogo} alt="TenderNet Logo" className="w-32 " />
            </div>
            <form
              action="https://getform.io/f/aqonznga"
              method="POST"
              encType="multipart/form-data"
              className="flex flex-col w-[400px]   items-center space-y-6 "
            >
              {/* Second Name  */}
              <div className="flex gap-2 px-8 flex-col items-start   rounded-xl text-[#141414]">
                <label htmlFor="" className="font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-white shadow-black/10  shadow-md rounded-lg py-2 px-8 text-center   font-bold"
                />
              </div>
              {/* Email */}
              <div className="flex gap-2 px-8 flex-col items-start   rounded-xl text-[#141414]">
                <label htmlFor="" className="font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="bg-white shadow-black/10  shadow-md rounded-lg px-8 py-2 text-center   font-bold"
                />
              </div>
              {/* Phone No */}
              <div className="flex gap-2 px-8 flex-col items-start    rounded-xl text-[#141414]">
                <label htmlFor="" className="font-semibold">
                  Phone No.
                </label>
                <input
                  type="number"
                  name="phone "
                  className="bg-white shadow-black/10  shadow-md rounded-lg px-8 py-2 text-center   font-bold"
                />
              </div>

              {/* Business Address */}
              <div className="flex gap-2 px-8 flex-col items-start    rounded-xl text-[#141414]">
                <label htmlFor="" className="font-semibold">
                  Business Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="bg-white shadow-black/10  shadow-md rounded-lg px-8 py-2 text-center   font-bold"
                />
              </div>

              {/* Describe The Service  */}
              <div className="flex gap-2 px-8 flex-col items-center    rounded-xl text-[#141414]">
                <label htmlFor="" className="font-semibold">
                  Description
                </label>
                <textarea
                  name="message"
                  className="bg-white shadow-black/10  shadow-md rounded-lg px-20   text-start py-4   "
                />
              </div>
              <div className="flex items-start justify-center px-6 mx-10  my-10 text-[#ff0000] text-lg hover:bg-[#ff0000] duration-200 ease-in-out    hover:text-white  font-semibold  shadow-black/30  shadow-md py-2 rounded-xl">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
