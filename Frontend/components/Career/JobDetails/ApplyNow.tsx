"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaPaperclip, FaMicrophone, FaTrashAlt } from "react-icons/fa";
import Frame2 from "@/assets/images/Frame 2.png"; 
import Frame1 from "@/assets/images/Frame (1).png";     // light mode image
import Button from "@/components/home/Button";

const ApplyNow = () => {
  const [fileName, setFileName] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

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

  const handleDeleteRecording = () => {
    setAudioURL(null);
    audioChunksRef.current = [];
    setIsRecording(false);
  };

  return (
    <section className="bg-[#f5f5f5] dark:bg-black text-black dark:text-white py-16 px-[5%] flex flex-col lg:flex-row gap-12 lg:gap-16 font-inter w-full transition-colors duration-500 overflow-hidden">
{/* Left Side Image */}
<div className="flex-1 hidden lg:flex">
  <div className="flex justify-center items-start -translate-y-2 ml-10 w-full h-full">
    {/* Dark mode image */}
    <div className="dark:block hidden w-full h-full">
      <Image
        src={Frame2}
        alt="Side Illustration Dark"
        width={600}
        height={480}
        style={{ objectFit: "contain" }}
      />
    </div>

    {/* Light mode image */}
    <div className="block dark:hidden w-full h-full">
      <Image
        src={Frame1}
        alt="Side Illustration Light"
        width={600}
        height={480}
        style={{ objectFit: "contain" }}
      />
    </div>
  </div>
</div>

      {/* Right Side Form */}
      <div className="flex-1 w-full lg:w-1/2">
        <h3 className="text-[26px] md:text-[36px] font-semibold font-inter">Apply Now</h3>
        <p className="font-inter mt-2 mb-8 text-gray-700 dark:text-[#E4E4E7] text-[18px] sm:text-[20px]">
          Our team would love to hear from you.
        </p>

        <form className="space-y-10 sm:space-y-12 w-full">
          {/* Challenge input with ? icon */}
          <div className="flex items-center justify-between gap-3 w-full">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
            />
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
            />
           <input
              type="text"
              placeholder="Phone number"
              className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
            />
          </div>

          {/* LinkedIn & Location */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <input
    type="text"
    placeholder="LinkedIn Profile URL"
    className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
  />
  <input
    type="text"
    placeholder="Location"
    className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
  />
</div>
<div className="flex items-center justify-between gap-3 w-full">
            <input
              type="text"
              placeholder="About You"
              className="flex-1 border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
            />
          </div>

{/* Attach File — First Row */}
<div className="flex items-center gap-5 mb-4">
  <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition cursor-pointer">
    <FaPaperclip /> Attach file
    <input type="file" onChange={handleFileChange} className="hidden" />
  </label>

  {fileName && (
    <span className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">
      {fileName}
    </span>
  )}
</div>

{/* NDA + Record Voice — Second Row */}
<div className="flex items-center justify-between text-sm font-inter w-full">
  {/* NDA Section */}
  <div className="flex items-center gap-2">
    <input type="checkbox" id="nda" className="accent-[#4848FF]" />
    <label htmlFor="nda" className="whitespace-nowrap">
      Secure data with NDA first
    </label>
    <span className="flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 dark:border-gray-600 text-[10px] font-semibold text-gray-600 dark:text-gray-300 cursor-pointer hover:bg-[#4848FF] hover:text-white transition">
      ?
    </span>
  </div>

  {/* Record Voice */}
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


          {/* Recorded Audio */}
          {audioURL && (
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-4 w-full sm:w-auto">
              <audio controls src={audioURL} className="w-full sm:w-[300px] md:w-[350px] border border-gray-400 dark:border-gray-700 rounded-md"></audio>
              <button type="button" onClick={handleDeleteRecording} className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition font-medium">
                <FaTrashAlt size={14} /> Delete
              </button>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-8 w-[180px]">
            <Button text="Apply" bgColor="#4848FF" textColor="#CFCEFB" hoverColor="#2E2EB5" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplyNow;
