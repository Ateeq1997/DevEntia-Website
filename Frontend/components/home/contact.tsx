"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaPaperclip, FaMicrophone, FaTrashAlt } from "react-icons/fa";
import { Check } from "lucide-react";
import contact from "../../assets/images/contact.png";
import messageLogo from "../../assets/images/message.png";
import callLogo from "../../assets/images/call.png";
import Button from "./Button";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const [formData, setFormData] = useState({
    challenge: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    nda: false,
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);

  // 🎙 Handle audio recording toggle
  const handleRecordToggle = async () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        const chunks: Blob[] = [];

        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/webm" });
          setAudioBlob(blob);
          setAudioURL(URL.createObjectURL(blob));
          toast.success("🎤 Voice message recorded!");
        };

        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();
        setIsRecording(true);
        toast.success("🎙 Recording started...");
      } catch (error) {
        toast.error("Microphone access denied or unavailable.");
        console.error(error);
      }
    }
  };

  const handleDeleteRecording = () => {
    setAudioBlob(null);
    setAudioURL("");
    toast.success("🗑️ Voice recording deleted.");
  };

  // 📎 Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      toast.success(`📎 File attached: ${selectedFile.name}`);
    }
  };

  // 📝 Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 🚀 Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, String(value)));
      if (file) data.append("file", file);
      if (audioBlob) data.append("voice", audioBlob, "recording.webm"); // ✅ key matches backend

      const res = await axiosInstance.post("/api/contact", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("✅ Message sent successfully!");
      console.log("Response:", res.data);

      // Reset form
      setFormData({
        challenge: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        nda: false,
      });
      setFile(null);
      setFileName("");
      setAudioURL("");
      setAudioBlob(null);
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f5f5f5] dark:bg-black text-black dark:text-white py-16 px-[5%] flex flex-col lg:flex-row gap-12 lg:gap-16 font-inter w-full transition-colors duration-500 overflow-x-hidden">
      {/* Left Side */}
      <div className="bg-gradient-to-b from-[#4848FF] to-[#2B2B99] px-8 sm:px-12 md:px-16 lg:px-16 2xl:px-24 pt-10 pb-16 text-white w-full lg:w-[40%] rounded-2xl shadow-lg">
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
            +92 344-8967017
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

     <div className="flex-1 w-full">
        <h3 className="text-[26px] md:text-[36px] font-semibold font-inter">Contact us</h3>
        <p className="font-inter mt-2 mb-8 text-gray-700 dark:text-[#E4E4E7] text-[18px] sm:text-[20px]">
          Our team would love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-12 w-full">
          {/* Challenge */}
          <div className="flex items-center justify-between gap-3 w-full">
            <input
              type="text"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              placeholder="Your challenge/goal*"
              required
              className="flex-1 border-b border-gray-400 dark:border-gray-600 bg-transparent outline-none focus:border-[#4848FF] py-2"
            />
            <span
              className="flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 text-[10px] text-gray-600 cursor-pointer hover:bg-[#4848FF] hover:text-white transition"
              style={{ transform: "translateX(-24px)" }}
            >
              ?
            </span>
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="border-b border-gray-400 bg-transparent outline-none focus:border-[#4848FF] py-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Corporate email*"
              required
              className="border-b border-gray-400 bg-transparent outline-none focus:border-[#4848FF] py-2"
            />
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="border-b border-gray-400 bg-transparent outline-none focus:border-[#4848FF] py-2"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="border-b border-gray-400 bg-transparent outline-none focus:border-[#4848FF] py-2"
            />
          </div>

          {/* NDA + File + Audio */}
          <div className="flex flex-wrap items-center justify-between text-sm font-inter">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="nda"
                name="nda"
                checked={formData.nda}
                onChange={handleChange}
                className="accent-[#4848FF]"
              />
              <label htmlFor="nda">Secure data with NDA first</label>
              <span className="flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 text-[10px] text-gray-600 cursor-pointer hover:bg-[#4848FF] hover:text-white transition">
                ?
              </span>
            </div>

            <div className="flex items-center gap-5">
              <label className="flex items-center gap-2 text-gray-600 transition cursor-pointer">
                <FaPaperclip /> Attach file
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
              {fileName && (
                <span className="text-xs text-gray-500 truncate max-w-[150px]">{fileName}</span>
              )}
              <button
                type="button"
                onClick={handleRecordToggle}
                className={`flex items-center gap-2 transition ${
                  isRecording ? "text-[#ff4747]" : "text-gray-600 "
                }`}
              >
                <FaMicrophone />
                {isRecording ? "Recording..." : "Record voice message"}
              </button>
            </div>
          </div>

          {/* Audio Player */}
          {audioURL && (
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
              <audio controls src={audioURL} className="w-full sm:w-[350px] border rounded-md"></audio>
              <button
                type="button"
                onClick={handleDeleteRecording}
                className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition"
              >
                <FaTrashAlt size={14} /> Delete
              </button>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-8 w-[180px]">
            <Button
  text={loading ? "Sending..." : "Send Message"}
  bgColor="#4848FF"
  textColor="#CFCEFB"
  hoverColor="#2E2EB5"
  disabled={!formData.nda || loading}
/>
          </div>

          <p className="text-[14px] text-gray-700 dark:text-[#E4E4E7] mt-4">
            By sending this form, you agree to Deventia Tech’s Privacy Policy.
          </p>
        </form>
      </div>
            <Toaster position="top-right" reverseOrder={false} />

    </section>
  );
};

export default Contact;
