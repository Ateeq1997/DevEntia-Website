"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaPaperclip, FaMicrophone, FaTrashAlt } from "react-icons/fa";
import { Check } from "lucide-react";
import contact from "../../assets/images/contact.png"; // right-side background image
import messageLogo from "../../assets/images/message.png"; // replace with your message logo path
import callLogo from "../../assets/images/call.png"; // replace with your call logo path
import Button from "./Button";
const Contact = () => {
  const [fileName, setFileName] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // ✅ Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  // ✅ Start or stop voice recording
  const handleRecordToggle = async () => {
    if (isRecording) {
      setIsRecording(false);
      mediaRecorderRef.current?.stop();
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioURL(audioUrl);
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (error) {
        console.error("Microphone access denied:", error);
        alert("Unable to access microphone. Please check permissions.");
      }
    }
  };

  // ✅ Delete recorded voice
  const handleDeleteRecording = () => {
    setAudioURL(null);
    audioChunksRef.current = [];
    setIsRecording(false);
  };

  return (
    <section className="bg-[#f5f5f5] dark:bg-black text-black dark:text-white py-16 px-[5%] flex flex-col lg:flex-row gap-12 lg:gap-16 font-inter w-full transition-colors duration-500 overflow-x-hidden">
      {/* Left Side */}
      <div className="bg-gradient-to-b from-[#4848FF] to-[#2B2B99] px-8 sm:px-12 md:px-16 lg:px-24 pt-10 pb-16 text-white w-full lg:w-[40%] rounded-2xl shadow-lg">
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
              className="flex items-start gap-3 relative before:absolute before:top-4 before:left-2.5 before:w-[2px] before:h-[calc(100%+40px)] before:bg-[#5F85ED] last:before:hidden"
            >
              <span className="p-1 flex items-center justify-center rounded-full bg-white text-[#5F85ED] font-bold z-10">
                <Check size={16} />
              </span>
              <span className="text-[16px] font-inter font-normal text-[#F5F7FC]">{text}</span>
            </li>
          ))}
        </ul>


<div className="relative overflow-hidden rounded-2xl p-3 md:p-8 bg-gradient-to-br from-[#6B63FF] to-[#3B37D6] w-full max-w-[650px] shadow-lg flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0 mt-6">

  {/* Left content section */}
  <div className="flex-1">
    {/* Top title */}
    <h4 className="text-white text-sm sm:text-base font-semibold">
      Let&apos;s Connect
    </h4>

    {/* Content rows */}
    <div className="mt-5 flex flex-col gap-4">
      {/* Row: Email */}
      <div className="flex items-start gap-6 md:gap-4  flex-row ">
        {/* Logo box */}
        <div className=" w-10 h-8 md:w-14 md:h-12 flex items-center justify-center rounded-md bg-white shrink-0 shadow-sm">
          <Image
            src={messageLogo}
            alt="message logo"
            className="w-6 h-6 object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col break-words max-w-full">
          <span className="text-white text-[16px] sm:text-[18px] font-semibold leading-tight sm:ml-0 -ml-4">
            Send a Message
          </span>
          <span className="text-white/85 text-[14px] sm:text-[15px] mt-1 break-words sm:ml-0 -ml-4">
            contact@deventiatech.com
          </span>
        </div>
      </div>

      {/* Row: Phone */}
      <div className="flex items-start gap-4 flex-row">
        <div className="w-10 h-8 md:w-14 md:h-12 flex items-center justify-center rounded-md bg-white shrink-0 shadow-sm">
          <Image
            src={callLogo}
            alt="call logo"
            className="w-6 h-6 object-contain"
          />
        </div>

        <div className="flex flex-col break-words max-w-full">
          <span className="text-white text-[16px] sm:text-[18px] font-semibold leading-tight sm:ml-0 ">
            Call Us Directly
          </span>
          <span className="text-white/85 text-[14px] sm:text-[15px] mt-1 break-all sm:ml-0 ">
            (+92) 344 8967017
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Right-side background image */}
  <div className="absolute right-0 top-0 bottom-0 hidden sm:flex justify-end items-center opacity-80">
    <Image
      src={contact}
      alt="contact background"
      className="w-[170px] h-auto object-contain mr-2"
    />
  </div>
</div>



      </div>

      {/* Right Side Form */}
      <div className="flex-1 w-full">
        <h3 className="text-[26px] md:text-[36px] font-semibold font-inter">Contact us</h3>
        <p className="font-inter mt-2 mb-8 text-gray-700 dark:text-[#E4E4E7] text-[18px] sm:text-[20px]">
          Our team would love to hear from you.
        </p>

        <form className="space-y-10 sm:space-y-12 w-full">
          {/* Challenge input with ? icon */}
         <div className="flex items-center justify-between gap-3 w-full">
  <input
    type="text"
    placeholder="Your challenge/goal*"
    className="flex-1 border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
  />
  {/* Smaller "?" Circle */}
  <span
    className="flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 dark:border-gray-600 text-[10px] font-semibold text-gray-600 dark:text-gray-300 cursor-pointer hover:bg-[#4848FF] hover:text-white transition"
    style={{ transform: "translateX(-24px)" }}
  >
    ?
  </span>
</div>


          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Corporate email*"
              className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
            />
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Phone number"
              className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
            />
          </div>
{/* NDA + Attachments & Recording — Split left/right */}
<div className="flex flex-wrap items-center justify-between text-sm font-inter">
 {/* NDA Section */}
<div className="flex items-center gap-2">
  <input type="checkbox" id="nda" className="accent-[#4848FF]" />
  <label htmlFor="nda" className="whitespace-nowrap">
    Secure data with NDA first
  </label>
  {/* Smaller "?" Circle */}
  <span className="flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 dark:border-gray-600 text-[10px] font-semibold text-gray-600 dark:text-gray-300 cursor-pointer hover:bg-[#4848FF] hover:text-white transition">
    ?
  </span>
</div>

  {/* Right Side — Attach file + Record voice */}
  <div className="flex items-center gap-5">
    {/* Attach File */}
    <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition cursor-pointer">
      <FaPaperclip /> Attach file
      <input type="file" onChange={handleFileChange} className="hidden" />
    </label>

    {/* Show File Name */}
    {fileName && (
      <span className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">
        {fileName}
      </span>
    )}

    {/* Record Voice Message */}
    <button
      type="button"
      onClick={handleRecordToggle}
      className={`flex items-center gap-2 transition font-inter ${
        isRecording
          ? "text-[#ff4747]"
          : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
      }`}
    >
      <FaMicrophone />
      {isRecording ? "Recording..." : "Record voice message"}
    </button>
  </div>
</div>

          {/* Recorded Audio */}
          {audioURL && (
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-4 w-full sm:w-auto">
              <audio
                controls
                src={audioURL}
                className="w-full sm:w-[300px] md:w-[350px] border border-gray-400 dark:border-gray-700 rounded-md"
              ></audio>
              <button
                type="button"
                onClick={handleDeleteRecording}
                className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition font-medium"
              >
                <FaTrashAlt size={14} /> Delete
              </button>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-8 w-[180px]">
         <Button
                 text="Send Message"
                 //href="/Contact-us"
                 bgColor="#4848FF"
                 textColor="#CFCEFB"
                 hoverColor="#2E2EB5"
               />
               </div>

          {/* Disclaimer */}
          <p className="text-[14px] text-gray-700 dark:text-[#E4E4E7] font-inter mt-4">
            By sending the information provided in this form, you agree to the
            processing of your personal data according to Deventia Tech’s Privacy
            Policy and Cookies Policy.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
