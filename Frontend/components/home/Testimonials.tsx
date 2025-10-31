"use client";

import React, { useState } from "react";
import { testimonialsData } from "./testmonials-data";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";


// Define platform colors
const platformColors: Record<string, string> = {
  fiverr: "linear-gradient(135deg, #1dbf73, #16a05d)",
  upwork: "linear-gradient(135deg, #14a800, #108a00)",
  linkedin: "linear-gradient(135deg, #0077b5, #005885)",
  facebook: "linear-gradient(135deg, #1877f2, #0d5ecc)",
  google: "linear-gradient(135deg, #4285f4, #2a75f3)",
};
const platformIcons: Record<string, JSX.Element> = {
  linkedin: <FaLinkedinIn className="text-white text-sm" />,
  facebook: <FaFacebookF className="text-white text-sm" />,
  google: <FaGoogle className="text-white text-sm" />,
};

// Testimonial type
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

// -------- Popup Modal --------
const TestimonialPopup: React.FC<{ testimonial: Testimonial; onClose: () => void }> = ({
  testimonial,
  onClose,
}) => {
  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
  <div
    className="
      relative w-[90%] max-w-[600px] rounded-2xl p-8
      bg-[#F0F0F0] dark:bg-[#0b0b0d]
      border border-[rgba(37,99,235,0.3)]
      text-black dark:text-white
      shadow-2xl
      transition-all duration-500
    "
  >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black dark:text-white text-xl font-bold hover:text-red-500"
        >
          ×
        </button>

        {/* Platform + Title */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
            style={{ background: platformColors[testimonial.platformColor] }}
          >
            <span className="text-white text-sm font-bold">
              {testimonial.platform[0]}
            </span>
          </div>
          <span className="text-base font-semibold">{testimonial.platform}</span>
        </div>

        {/* Full Text */}
        <p className="text-sm md:text-base leading-relaxed mb-6">{testimonial.text}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-5 mt-5 border-t border-[rgba(37,99,235,0.3)] dark:border-[rgba(255,255,255,0.2)]">
          <div className="flex items-center gap-3.5">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm border-2 border-[rgba(37,99,235,0.3)]"
              style={{ background: testimonial.avatarGradient, color: "white" }}
            >
              {testimonial.clientInitials}
            </div>
            <div>
              <div className="font-bold text-sm md:text-base">
                {testimonial.clientName}
              </div>
              <div className="text-xs opacity-80">{testimonial.clientRole}</div>
            </div>
          </div>

          <div className="flex gap-0.5">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-[#fbbf24] text-sm md:text-base">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// -------- Testimonial Card --------
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Card container */}
      <div className="relative min-w-[280px] max-w-[280px] md:min-w-[360px] md:max-w-[360px] lg:min-w-[400px] lg:max-w-[400px] h-[380px] flex-shrink-0 group">
        <div
  className={`
    relative h-full rounded-2xl p-6 md:p-7 lg:p-8
    transition-all duration-500 hover:-translate-y-2
    border border-[rgba(37,99,235,0.2)]
    backdrop-blur-[10px]
    bg-[#F0F0F0] dark:bg-[#F0F0F01A] text-black dark:text-white
    hover:bg-gradient-to-br hover:from-[#2563eb] hover:to-[#1d4ed8]
    hover:text-white dark:hover:text-white flex flex-col
  `}
>

          <span className="absolute top-6 right-6 text-[60px] text-[rgba(37,99,235,0.06)] leading-none font-serif -z-0"></span>

          {/* Platform */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-7 h-7 md:w-8 md:h-8 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: platformColors[testimonial.platformColor] }}
            >
            {platformIcons[testimonial.platformColor] || (
  <span className="text-white text-xs font-bold">
    {testimonial.platform[0]}
  </span>
)}

            </div>
            <span className="text-xs md:text-sm font-semibold text-black dark:text-white group-hover:text-white transition-colors">
              {testimonial.platform}
            </span>
          </div>

          {/* Text (preview only) */}
          <div className="flex-1 overflow-hidden">
            <p className="text-black dark:text-white text-sm md:text-base leading-relaxed line-clamp-6 transition-colors duration-300 group-hover:text-white">
  {testimonial.text}
</p>


            {testimonial.text.split(" ").length > 30 && (
              <button
                onClick={() => setShowPopup(true)}
                className="mt-2 text-sm font-semibold hover:underline text-black dark:text-white group-hover:text-white"
              >
                Read More
              </button>
            )}
          </div>

          {/* Footer */}
          <div
            className="
              flex items-center justify-between gap-3.5
              pt-6 mt-5 border-t-[1.5px]
              border-[rgba(37,99,235,0.3)]
              dark:border-[rgba(255,255,255,0.2)]
              transition-all duration-300 group-hover:border-[rgba(255,255,255,0.5)]
            "
          >
            <div className="flex items-center gap-3.5">
              <div
                className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-bold text-sm border-2 border-[rgba(37,99,235,0.3)]"
                style={{ background: testimonial.avatarGradient, color: "white" }}
              >
                {testimonial.clientInitials}
              </div>
              <div>
                <div className="font-bold text-sm md:text-base text-black dark:text-white group-hover:text-white transition-colors">
                  {testimonial.clientName}
                </div>
                <div className="text-[11px] md:text-xs text-black dark:text-white group-hover:text-white transition-colors">
                  {testimonial.clientRole}
                </div>
              </div>
            </div>
<div className="flex gap-0.5">
{Array.from({ length: Math.max(0, Number(testimonial.rating) || 0) }).map((_, i) => (
  <span key={i} className="text-[#fbbf24] text-sm md:text-base">
    ★
  </span>
))}

</div>

          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <TestimonialPopup testimonial={testimonial} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
};

// -------- Main Component --------
export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden bg-[#ffffff] dark:bg-[#0b0b0d] text-black dark:text-white transition-colors duration-500">
      <div className="text-center mb-12 md:mb-16 animate-fadeIn px-5">
        <h2
          className="text-4xl md:text-5xl lg:text-[56px] font-black mb-5 leading-tight tracking-tight text-center text-black dark:text-white whitespace-pre-line"
        >
          {`Happy Words From\nHappy Customer`}
        </h2>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-4 md:gap-5 mb-4 md:mb-5 animate-scrollLeft hover:pause">
          {testimonialsData.row1.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
          {testimonialsData.row1.map((t) => (
            <TestimonialCard key={`dup-${t.id}`} testimonial={t} />
          ))}
        </div>

        <div className="flex gap-4 md:gap-5 animate-scrollRight hover:pause">
          {testimonialsData.row2.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
          {testimonialsData.row2.map((t) => (
            <TestimonialCard key={`dup-${t.id}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes float {0%, 100% { transform: translate(0, 0); } 50% { transform: translate(40px, -40px); }}
        @keyframes fadeIn {from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); }}
        @keyframes scrollLeft {0% { transform: translateX(0); } 100% { transform: translateX(-50%); }}
        @keyframes scrollRight {0% { transform: translateX(-50%); } 100% { transform: translateX(0); }}
        .animate-float { animation: float 25s ease-in-out infinite; }
        .animate-float-delayed { animation: float 25s ease-in-out infinite; animation-delay: -12s; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-scrollLeft { animation: scrollLeft 30s linear infinite; will-change: transform; }
        .animate-scrollRight { animation: scrollRight 30s linear infinite; will-change: transform; }
        .animate-scrollLeft:hover, .animate-scrollRight:hover { animation-play-state: paused; }
        @media (max-width: 1024px) { .animate-scrollLeft, .animate-scrollRight { animation-duration: 28s; } }
        @media (max-width: 768px) { .animate-scrollLeft, .animate-scrollRight { animation-duration: 18s; } }
        @media (max-width: 480px) { .animate-scrollLeft, .animate-scrollRight { animation-duration: 16s; } }
        .hover\\:pause:hover { animation-play-state: paused !important; }
      `}</style>
    </section>
  );
}
