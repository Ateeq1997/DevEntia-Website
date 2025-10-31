"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../home/Button";
import axiosInstance from "@/lib/axiosInstance";
import toast, { Toaster } from "react-hot-toast"; // ✅ import Toaster


export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);

 const res = await axiosInstance.post("/mail", { 
        email,
        senderEmail: email,
        message: "Newsletter subscription request",
        subject: "Newsletter Subscription",
        phoneNumber: "N/A",
        fullName: "Newsletter Subscriber",
        isNewsletter: true
      });
      
      if (res.status === 201) {
        toast.success("Subscribed successfully!");
        setEmail("");
      }
    } catch (error: any) {
      if (error.response?.status === 409) {
        toast.error("Email already subscribed.");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative bg-[#E8F2FF] dark:bg-[#141414] text-white px-[5%] py-12 overflow-hidden">
      {/* Floating dots for visual detail */}
      <div className="absolute top-0 left-[16%] w-6 h-6  rounded-full opacity-50 dark:opacity-80"   style={{ background: "linear-gradient(135deg, #4848FF, #2B2B99)" }}></div>
      <div className="absolute bottom-3 left-10 w-5 h-5  rounded-full opacity-50 dark:opacity-80"   style={{ background: "linear-gradient(135deg, #4848FF, #2B2B99)" }}></div>
      <div className="absolute bottom-0 left-[40%] w-8 h-8  rounded-full opacity-50 dark:opacity-80"   style={{ background: "linear-gradient(135deg, #4848FF, #2B2B99)" }}></div>
      <div className="absolute bottom-2 right-[30%] w-8 h-8  rounded-full opacity-50 dark:opacity-80"   style={{ background: "linear-gradient(135deg, #4848FF, #2B2B99)" }}></div>
      <div className="absolute top-2 right-[10%] w-8 h-8  rounded-full opacity-50 dark:opacity-80"   style={{ background: "linear-gradient(135deg, #4848FF, #2B2B99)" }}></div>

      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 py-8">
          <h2 className="text-3xl md:text-4xl lg:text-[49px] lg:text-[48px] text-black dark:text-white font-semibold mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-gray-400 text-[15px] lg:text-[22px] leading-relaxed mb-8">
            Stay up to date with the latest news, announcements, and articles.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full flex-1 bg-white dark:bg-[#454545CC] text-white px-4 py-4 rounded-md  transition"
            />
            <div className="w-[150px] mt-3">
 <Button
                text={loading ? "Subscribing..." : "Subscribe"}
                bgColor="#4848FF"
                textColor="#CFCEFB"
                hoverColor="#2E2EB5"
                disabled={loading}
               onClick={() => handleSubmit(new Event("submit") as any)} // ✅ wrapper function
              />
            </div>
          
          </form>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden">
            <Image
              src="/about/Rectangle 17836662.png" // replace with your image path
              alt="Newsletter team"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1E1EBE",
            color: "#CFCEFB",
            fontSize: "14px",
            borderRadius: "10px",
            padding: "10px 16px",
          },
          success: {
            style: { background: "#2E2EB5", color: "#fff" },
          },
          error: {
            style: { background: "#FF4B4B", color: "#fff" },
          },
        }}
      />

    </section>
  );
}
