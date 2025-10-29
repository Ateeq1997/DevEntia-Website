"use client";

import React from "react";
import { testimonialsData } from "./testmonials-data";

// Define platform colors with proper typing
const platformColors: Record<string, string> = {
  fiverr: "linear-gradient(135deg, #1dbf73, #16a05d)",
  upwork: "linear-gradient(135deg, #14a800, #108a00)",
  linkedin: "linear-gradient(135deg, #0077b5, #005885)",
  facebook: "linear-gradient(135deg, #1877f2, #0d5ecc)",
  google: "linear-gradient(135deg, #4285f4, #2a75f3)",
};

// Define the testimonial type
type Testimonial = {
  id: number;
  platform: string;
  platformColor: string;
  rating: number;
  text: string;
  clientName: string;
  clientRole?: string;
  avatarGradient?: string;
  clientInitials?: string;
};

// Component with proper prop typing
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="relative min-w-[280px] max-w-[280px] md:min-w-[360px] md:max-w-[360px] lg:min-w-[400px] lg:max-w-[400px] flex-shrink-0 group">
      {/* Card with gradient border on hover */}
      <div className="relative h-full bg-gradient-to-br from-[rgba(15,23,42,0.6)] to-[rgba(17,24,39,0.8)] dark:from-[rgba(15,23,42,0.6)] dark:to-[rgba(17,24,39,0.8)] backdrop-blur-xl border border-[rgba(37,99,235,0.2)] rounded-3xl p-6 md:p-7 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(37,99,235,0.4)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.3)]">
        
        {/* Gradient border effect on hover */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{ padding: "2px", margin: "-2px" }}
        ></div>

        {/* Quote icon */}
        <span className="absolute top-6 right-6 text-[50px] md:text-[60px] lg:text-[70px] text-[rgba(37,99,235,0.06)] leading-none font-serif -z-0">
        
        </span>

        {/* Card content */}
        <div className="relative z-10">
          {/* Header - Platform and Stars */}
          <div className="flex justify-between items-center mb-5">
            {/* Platform */}
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 md:w-8 md:h-8 rounded-xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
                style={{ background: platformColors[testimonial.platformColor] }}
              >
                {testimonial.platform === "Fiverr" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                )}
                {testimonial.platform === "Upwork" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <text
                      x="50%"
                      y="70%"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      U
                    </text>
                  </svg>
                )}
                {testimonial.platform === "LinkedIn" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <text
                      x="50%"
                      y="70%"
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      in
                    </text>
                  </svg>
                )}
                {testimonial.platform === "Facebook" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <text
                      x="50%"
                      y="70%"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      f
                    </text>
                  </svg>
                )}
                {testimonial.platform === "Google" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <text
                      x="50%"
                      y="70%"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      G
                    </text>
                  </svg>
                )}
              </div>
              <span className="text-xs md:text-sm font-semibold text-[#e2e8f0]">
                {testimonial.platform}
              </span>
            </div>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-[#fbbf24] text-base">
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-[#cbd5e1] text-xs md:text-[13px] lg:text-[15px] leading-relaxed mb-6">
            {testimonial.text}
          </p>

          {/* Client Info */}
          <div className="flex items-center gap-3.5 pt-5 border-t border-[rgba(37,99,235,0.15)]">
            {/* Avatar */}
            <div
              className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-bold text-sm text-white border-2 border-[rgba(37,99,235,0.3)] shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
              style={{ background: testimonial.avatarGradient }}
            >
              {testimonial.clientInitials}
            </div>

            {/* Client Details */}
            <div className="flex-1">
              <div className="font-bold text-sm md:text-base text-[#f1f5f9] mb-0.5">
                {testimonial.clientName}
              </div>
              <div className="text-[11px] md:text-xs text-[#64748b]">
                {testimonial.clientRole}
              </div>
            </div>

            {/* Verified Badge */}
            <div className="w-[18px] h-[18px] bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.5)]">
              <svg viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden bg-[#ffffff] dark:bg-[#0b0b0d] text-[#0b0b0d] dark:text-white transition-colors duration-500">
      {/* Background Animation */}
      {/* <div className="fixed inset-0 z-0 bg-gradient-radial from-[#0f1419] via-[#000000] to-[#000000] hidden dark:block"> */}
        <div className="absolute inset-0 z-0 bg-gradient-radial from-[#0f1419] via-[#000000] to-[#000000] hidden dark:block">

        {/* Floating orbs */}
        <div className="absolute w-[500px] h-[500px] bg-[#2563eb] rounded-full -top-[200px] -right-[100px] blur-[80px] opacity-[0.08] animate-float"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#1d4ed8] rounded-full -bottom-[150px] -left-[100px] blur-[80px] opacity-[0.08] animate-float-delayed"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fadeIn">
          <span className="inline-block px-6 py-2.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.3)] rounded-full text-xs font-bold text-[#60a5fa] tracking-[2px] uppercase mb-6">
            ✦ TESTIMONIALS ✦
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black mb-5 bg-gradient-to-r from-white via-[#93c5fd] to-[#2563eb] bg-clip-text text-transparent leading-tight tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-[#94a3b8] max-w-[600px] mx-auto">
            Trusted by businesses worldwide to deliver exceptional digital solutions
          </p>
        </div>

        {/* Testimonials Wrapper */}
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          {/* First Row - Scroll Left */}
          <div className="flex gap-4 md:gap-5 mb-4 md:mb-5 animate-scrollLeft hover:pause">
            {testimonialsData.row1.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            {testimonialsData.row1.map((testimonial) => (
              <TestimonialCard key={`dup-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Second Row - Scroll Right */}
          <div className="flex gap-4 md:gap-5 animate-scrollRight hover:pause">
            {testimonialsData.row2.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            {testimonialsData.row2.map((testimonial) => (
              <TestimonialCard key={`dup-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="/Contact-us"
            className="inline-flex items-center gap-2.5 px-8 md:px-10 py-3.5 md:py-4 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-bold text-sm md:text-base rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.5)] border border-[rgba(37,99,235,0.3)]"
          >
            <span>Start Your Project</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-[18px] md:h-[18px]"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -40px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-float { animation: float 25s ease-in-out infinite; }
        .animate-float-delayed { animation: float 25s ease-in-out infinite; animation-delay: -12s; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-scrollLeft { animation: scrollLeft 30s linear infinite; will-change: transform; }
        .animate-scrollRight { animation: scrollRight 30s linear infinite; will-change: transform; }
        .animate-scrollLeft:hover, .animate-scrollRight:hover { animation-play-state: paused; }
        @media (max-width: 1024px) {
          .animate-scrollLeft, .animate-scrollRight { animation-duration: 28s; }
        }
        @media (max-width: 768px) {
          .animate-scrollLeft, .animate-scrollRight { animation-duration: 18s; }
        }
        @media (max-width: 480px) {
          .animate-scrollLeft, .animate-scrollRight { animation-duration: 16s; }
        }
        .hover\\:pause:hover { animation-play-state: paused !important; }
      `}</style>
    </section>
  );
}
