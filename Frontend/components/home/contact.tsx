"use client";

import React from "react";
import { FaPaperclip, FaMicrophone } from "react-icons/fa";
import { Check } from "lucide-react";
const Contact = () => {
  return (
    <section className="bg-black text-white py-16 px-[5%] flex flex-col lg:flex-row  gap-16 font-inter w-full">
      {/* Left Side */}
      <div className="bg-gradient-to-b from-[#4848FF] to-[#2B2B99] px-24 pt-10 pb-20 text-white w-full lg:w-[40%]">
        <h3 className="text-[24px] font-medium mb-4 font-inter">Let’s Connect</h3>
        <p className="text-[#F5F7FC] text-[18px] mb-6 font-inter font-light">
             Fill out the form, and we’ve got you
             covered.
        </p>

        <h4 className="text-[18px] font-medium  mb-10 font-inter">What happens next?</h4>
<ul className="space-y-10 text-sm relative">
  {[
    "Our expert will follow up after reviewing your needs.",
    "If required, we’ll sign an NDA to ensure privacy.",
    "Our Pre-Sales Manager will send you a proposal.",
    "Then, we get started on your project."
  ].map((text, i) => (
    <li
      key={i}
      className="flex items-start gap-3 relative
        before:absolute before:top-4 before:left-2.5 
        before:w-[2px] before:h-[calc(100%+40px)] before:bg-[#5F85ED] 
        last:before:hidden"
    >
      <span className="p-1 flex items-center justify-center rounded-full bg-white text-[#5F85ED] font-bold z-10">
        <Check size={16} />
      </span>
      <span className="text-[16px] font-inter font-normal text-[#F5F7FC]">{text}</span>
    </li>
  ))}
</ul>




      </div>

      {/* Right Side Form */}
      <div className="flex-1">
        <h3 className="text-[26px] md:text-[36px] font-semibold font-inter">Contact us</h3>
        <p className="font-inter mt-2 mb-8 text-[#E4E4E7] text-[20px]">
          Our team would love to hear from you.
        </p>

        <form className="space-y-12">
          {/* Challenge Input */}
          <div>
            
            <input
              type="text"
              placeholder="Your challenge/goal*"
              className="w-full border-b border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter"
            />
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Name*"
                className="w-full border-b border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter"
              />
            </div>
            <div>
             
              <input
                type="email"
                placeholder="Corporate email*"
                className="w-full border-b border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter"
              />
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
             <input
                type="text"
                placeholder="Phone number"
                className="w-full border-b border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company"
                className="w-full border-b border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter"
              />
            </div>
          </div>

          {/* Options */}
          <div className="flex flex-row items-center justify-between gap-4 items-center text-[#E4E4E7]">

          <div className="flex items-center gap-2 text-sm font-inter">
            <input type="checkbox" id="nda" className="accent-[#4848FF]" />
            <label htmlFor="nda" className="font-inter">Secure data with NDA first</label>
          </div>
          <div className="flex flex-row items-center gap-8">
           <button
              type="button"
              className="font-inter flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <FaPaperclip /> Attach file
            </button>
            <button
              type="button"
              className="font-inter flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <FaMicrophone /> Record voice message
            </button>
            </div>
                    </div>


          {/* Buttons */}
            <button
              type="submit"
              className=" bg-[#4848FF] px-6 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-[0_0_20px_rgba(72,72,255,0.6)]"
            >
              Send Message
            </button>
           

          {/* Disclaimer */}
          <p className="text-[14px] text-[#E4E4E7] font-inter mt-4">
              Sending the information provided in this form you agree to the processing of your personal data according to Deventia tech Privacy Policy and Cookies Policy to handle the request and respond to it.          
            </p>
            </form>
      </div>
    </section>
  );
};

export default Contact;
