"use client";

import React, { useRef, useState } from "react";
import { FaPaperclip, FaMicrophone, FaQuestionCircle } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";

import { Check } from "lucide-react";

const Contact = () => {

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);

  // 📂 Handle Attach File
  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log("Selected file:", e.target.files[0]);
      // ✅ You can send file to API or store it in state here
    }
  };

  // 🎤 Handle Voice Recording
  const handleVoiceClick = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        const chunks: BlobPart[] = [];

        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: "audio/webm" });
          console.log("Recorded audio blob:", audioBlob);

          // ✅ You can upload this `audioBlob` to your server here
        };

        mediaRecorder.start();
        setRecorder(mediaRecorder);
        setIsRecording(true);
      } catch (err) {
        console.error("Microphone access denied:", err);
      }
    } else {
      recorder?.stop();
      setIsRecording(false);
    }
  };

  return (
    <section className="bg-black text-white py-16 px-[5%] flex flex-col lg:flex-row gap-16 font-inter w-full">
      {/* Left Side */}
      <div className="bg-gradient-to-b from-[#4848FF] to-[#2B2B99] px-16 md:px-24 pt-10 pb-20 text-white w-full lg:w-[40%]">
        <h3 className="text-[24px] font-medium mb-4 font-inter">Let’s Connect</h3>
        <p className="text-[#F5F7FC] text-[18px] mb-6 font-inter font-light">
          Fill out the form, and we’ve got you covered.
        </p>

        <h4 className="text-[18px] font-medium mb-10 font-inter">What happens next?</h4>
        <ul className="space-y-10 text-sm relative">
          {[
            "Our expert will follow up after reviewing your needs.",
            "If required, we’ll sign an NDA to ensure privacy.",
            "Our Pre-Sales Manager will send you a proposal.",
            "Then, we get started on your project.",
          ].map((text, i) => (
            <li
              key={i}
              className="flex items-start gap-3 relative before:absolute before:top-4 before:left-2.5 
              before:w-[2px] before:h-[calc(100%+40px)] before:bg-[#5F85ED] last:before:hidden"
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

        <form className="space-y-8">
          {/* Challenge Input with question mark */}
          <div className="relative">
            <input
              type="text"
              placeholder="Your challenge/goal*"
              className="w-full border-b border-gray-600 mt-8 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter pr-8"
            />
            <CiCircleQuestion size={20} className="absolute right-2 bottom-0 transform -translate-y-1/2 text-gray-200  cursor-pointer" />
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <input
                type="text"
                placeholder="Name*"
                className="w-full border-b border-gray-600 mt-6 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Corporate email*"
                className="w-full border-b border-gray-600 mt-6 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter"
              />
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border-b border-gray-600 mt-6 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company"
                className="w-full border-b border-gray-600 mt-6 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter"
              />
            </div>
          </div>

          {/* Options with question mark */}
          <div className="flex flex-row items-center justify-between gap-4 text-[#E4E4E7]">
            <div className="flex items-center gap-2 text-sm font-inter relative">
              <input type="checkbox" id="nda" className="accent-[#4848FF]" />
              <label htmlFor="nda" className="font-inter">
                Secure data with NDA first
              </label>
              <CiCircleQuestion size={20} className="text-gray-400 hover:text-[#4848FF] cursor-pointer ml-1" />
            </div>

            <div className="flex flex-row items-center gap-8">
      <button
        type="button"
        onClick={handleAttachClick}
        className="font-inter flex items-center gap-2 text-sm text-gray-300 hover:text-white"
      >
        <FaPaperclip /> Attach file
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={handleVoiceClick}
        className={`font-inter flex items-center gap-2 text-sm ${
          isRecording ? "text-red-500" : "text-gray-200 hover:text-white"
        }`}
      >
        <FaMicrophone /> {isRecording ? "Stop recording" : "Record voice message"}
      </button>
    </div>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="relative overflow-hidden flex items-center px-4 lg:px-5 py-3 font-medium text-[12px] lg:text-[19px] bg-[#4848FF] transition-all duration-700 ease-in-out group"
          >
            <span className="relative z-10 flex items-center gap-3 text-white transition-colors duration-300">
              Send Message
            </span>
            <span className="absolute inset-0 bg-blue-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
          </button>

          <p className="text-[14px] text-[#E4E4E7] font-inter mt-4">
            Sending the information provided in this form you agree to the processing of your personal data according to Deventia tech Privacy Policy and Cookies Policy to handle the request and respond to it.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
