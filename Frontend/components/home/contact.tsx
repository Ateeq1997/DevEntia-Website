"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaPaperclip, FaMicrophone, FaTrashAlt } from "react-icons/fa";
import { Check } from "lucide-react";
import contact from "../../assets/images/contact.png";

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
    <section className="bg-[#f5f5f5] dark:bg-black text-black dark:text-white py-16 px-[5%] flex flex-col lg:flex-row gap-12 lg:gap-16 font-inter w-full transition-colors duration-500">
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

      <h3 className="text-[24px] font-medium mb-6 mt-14 font-inter">Let&apos;s Connect</h3>


  {/* Replace your contact info block with this */}
<div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#6B63FF] to-[#3B37D6] w-full max-w-full shadow-lg">
  {/* Decorative globe / background mark top-right */}
  <svg
    className="pointer-events-none absolute right-4 top-3 opacity-15 dark:opacity-10"
    width="160"
    height="120"
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g opacity="0.08">
      <path d="M12 36c0 0 20-24 76-24s76 24 76 24v72H12V36z" fill="#FFFFFF"/>
      <g opacity="0.12" transform="translate(8,8)">
        <path d="M120 18c0 0-16 6-24 0s-20 4-32 4-22-4-30 0-20 0-20 0" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 56c8 0 12 6 20 6s14-6 24-6 18 6 26 6 14-6 22-6" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </svg>

  {/* Top title */}
  <div className="flex items-start justify-between">
    <h4 className="text-white text-sm sm:text-base font-semibold">Let's connect</h4>
  </div>

  {/* Content rows */}
  <div className="mt-5 flex flex-col gap-4">
    {/* Row: Email */}
    <div className="flex items-start gap-4">
      {/* White rectangular badge (shorter height, wider) */}
      <div className="w-14 h-12 flex items-center justify-center rounded-md bg-white shrink-0 shadow-sm">
        {/* Blue mail icon (larger) */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#4848FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9" />
          <path d="M3 7.5L12 13l9-5.5" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-white text-[16px] sm:text-[18px] font-semibold leading-tight">Send a Message</span>
        <span className="text-white/85 text-[14px] sm:text-[15px] mt-1">contact@deventiatech.com</span>
      </div>
    </div>

    {/* Row: Phone */}
    <div className="flex items-start gap-4">
      <div className="w-14 h-12 flex items-center justify-center rounded-md bg-white shrink-0 shadow-sm">
        {/* Blue phone icon (larger) */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#4848FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.2 1.05.48 2.06.82 3.02a1 1 0 0 1-.24 1l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a1 1 0 0 1 1-.24c.97.34 1.98.62 3.02.82a1 1 0 0 1 .75 1V21z"/>
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="text-white text-[16px] sm:text-[18px] font-semibold leading-tight">Call Us Directly</span>
        <span className="text-white/85 text-[14px] sm:text-[15px] mt-1">(+92) 344 8967017</span>
      </div>
    </div>
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
            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-400 dark:border-gray-600 text-xs font-semibold text-gray-600 dark:text-gray-300 cursor-pointer hover:bg-[#4848FF] hover:text-white transition">
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

          {/* NDA Option */}
          <div className="flex items-center gap-3 text-sm font-inter flex-wrap">
            <input type="checkbox" id="nda" className="accent-[#4848FF]" />
            <label htmlFor="nda">Secure data with NDA first</label>
            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-400 dark:border-gray-600 text-xs font-semibold text-gray-600 dark:text-gray-300 cursor-pointer hover:bg-[#4848FF] hover:text-white transition">
              ?
            </span>
          </div>

          {/* Attachments & Recording */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition cursor-pointer">
              <FaPaperclip /> Attach file
              <input type="file" onChange={handleFileChange} className="hidden" />
            </label>
            {fileName && (
              <span className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">
                {fileName}
              </span>
            )}

            <button
              type="button"
              onClick={handleRecordToggle}
              className={`flex items-center gap-2 text-sm transition font-inter ${
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
          <button
            type="submit"
            className="bg-[#4848FF] text-white px-6 py-3 font-semibold hover:opacity-90 transition shadow-[0_0_20px_rgba(72,72,255,0.6)] w-full sm:w-auto"
          >
            Send Message
          </button>

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
