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

        <h3 className="text-[24px] font-medium mb-6 mt-14 font-inter">Let’s Connect</h3>

        {/* ✅ Contact Info Container */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-[#7A7AFF] bg-opacity-40 rounded-xl p-6 mt-4 space-y-6 sm:space-y-0">
          <div className="flex flex-col space-y-5 text-white font-inter w-full sm:w-1/2">
            <div>
              <p className="text-[14px] opacity-80">Send a Message</p>
              <p className="text-[16px] font-semibold break-words">
                contact@deventiatech.com
              </p>
            </div>
            <div>
              <p className="text-[14px] opacity-80">Call Us Directly</p>
              <p className="text-[16px] font-semibold">(+92) 344 8967017</p>
            </div>
          </div>

          <div className="sm:w-1/2 flex justify-center">
            <Image
              src={contact}
              alt="Contact graphic"
              className="w-24 sm:w-32 h-24 sm:h-32 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex-1">
        <h3 className="text-[26px] md:text-[36px] font-semibold font-inter">
          Contact us
        </h3>
        <p className="font-inter mt-2 mb-8 text-gray-700 dark:text-[#E4E4E7] text-[18px] sm:text-[20px]">
          Our team would love to hear from you.
        </p>

        <form className="space-y-10 sm:space-y-12">
          {/* Challenge Input */}
          <input
            type="text"
            placeholder="Your challenge/goal*"
            className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2 font-inter placeholder-gray-600 dark:placeholder-gray-400"
          />

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

          {/* Options */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-gray-700 dark:text-[#E4E4E7] flex-wrap">
            <div className="flex items-center gap-2 text-sm font-inter">
              <input type="checkbox" id="nda" className="accent-[#4848FF]" />
              <label htmlFor="nda" className="font-inter">
                Secure data with NDA first
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Attach File */}
              <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition cursor-pointer">
                <FaPaperclip /> Attach file
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
              {fileName && (
                <span className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">
                  {fileName}
                </span>
              )}

              {/* Record Voice Message */}
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
          </div>

          {/* ✅ Playback & Delete recorded audio */}
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
            Sending the information provided in this form you agree to the
            processing of your personal data according to Deventia Tech Privacy
            Policy and Cookies Policy to handle the request and respond to it.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
