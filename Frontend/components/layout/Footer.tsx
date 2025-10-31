"use client";
import Image from "next/image";
import React from "react";
import logoImg from "@/assets/images/logoImg.png";
import logoImg1 from "@/assets/images/blacklogo.png";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaSquareFacebook } from "react-icons/fa6";
import { LuSlack } from "react-icons/lu";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  // ✅ Social links defined to fix red underline errors
  const socialLinks = [
    {
      url: "https://www.facebook.com/profile.php?id=61555020486889&mibextid=LQQJ4d",
      icon: <FaSquareFacebook />,
    },
    {
      url: "https://www.linkedin.com/company/deventia-tech-pvt-ltd/",
      icon: <FaLinkedinIn />,
    },
    {
      url: "https://www.instagram.com/deventiatechlimited?igsh=NWhhdmFpczVzeHBm&utm_source=qr",
      icon: <FaInstagram />,
    },
    {
      url: "https://deventialimited.slack.com/join/shared_invite/zt-2nreu7n87-U3thaVfp3_M0PwzRV73OKg",
      icon: <LuSlack />,
    },
  ];

  return (
    <footer
      className="p-[5%] relative transition-colors duration-500
             bg-white dark:bg-[#161616] text-[#0b0b0d] dark:text-white
             z-[1] overflow-visible"
    >
      <div className="absolute bottom-0 left-0 footer-bg-img"></div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-xl text-[#374151] dark:text-white/35 mb-4">
            Navigation
          </h4>
          <div className="flex flex-col space-y-1">
            {[
              ["Home", "/"],
              ["Services", "/Services"],
              ["About Us", "/About-us"],
              ["Our Portfolio", "/Our-Portfolio"],
              // ["Careers", "/Careers"],
              ["Contacts", "/Contact-us"],
              ["Terms & Conditions", "/terms-and-conditions"],
              ["Privacy Policy", "/privacy-policy"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-lg font-medium hover:underline hover:text-[#7471E6] text-[#0b0b0d] dark:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Us + Socials */}
        <div>
          <h4 className="font-semibold text-xl text-[#374151] dark:text-white/35 mb-4">
            Contact us
          </h4>
          <a
            className="text-lg font-medium hover:underline hover:text-[#7471E6] text-[#0b0b0d] dark:text-white block"
            rel="stylesheet"
            href="tel:+923448967017"
          >
            +92 344-8967017
          </a>

          <h4 className="font-semibold text-xl text-[#374151] dark:text-white/35 my-4 md:mt-20">
            Follow us
          </h4>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ url, icon }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-black/10 dark:border-white/25 rounded-full hover:scale-125 transition-all duration-700 ease-in-out text-[#4848FF] dark:text-white hover:text-[#7471E6]"
              >
                {icon}
              </a>
            ))}
          </div>

          <h4 className="font-semibold text-xl text-[#374151] dark:text-white/35 my-4 mt-8">
            Location
          </h4>
          <p className="text-lg font-medium mt-4 text-[#0b0b0d] dark:text-white leading-relaxed">
            Office #7, First Floor, Elanza Mall, D-Markaz, Gulberg Residencia,
            Islamabad
          </p>
        </div>

        {/* Email + Chat */}
        <div>
          <a
            href="mailto:prosper@deventiatech.com"
            className="block mt-12 hover:underline hover:text-[#7471E6] text-[#0b0b0d] dark:text-white break-words"
          >
            prosper@deventiatech.com
          </a>

          <h4 className="font-semibold text-xl text-[#374151] dark:text-white/35 my-4 md:mt-20">
            Let’s chat
          </h4>

          <div className="flex gap-3 flex-wrap">
            <a
              href="https://wa.me/+923448967017"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black/10 dark:border-white/25 rounded-full hover:scale-125 transition-all duration-700 ease-in-out text-[#4848FF] dark:text-white hover:text-[#7471E6]"
            >
              <FaWhatsapp />
            </a>
            <a
              href="/Contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black/10 dark:border-white/25 rounded-full hover:scale-125 transition-all duration-700 ease-in-out text-[#4848FF] dark:text-white hover:text-[#7471E6]"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>


<div className="flex justify-center items-start sm:justify-end cursor-pointer">
  <Link href="/">
    <div className="relative">
      <Image
        src={logoImg1}
        alt="deventia logo light"
        width={150}
        unoptimized
        className="block dark:hidden scale-110"
      />

      <Image
        src={logoImg}
        alt="deventia logo dark"
        width={150}
        unoptimized
        className="hidden dark:block scale-110"
      />
    </div>
  </Link>
</div>

      </div>

      {/* Footer bottom */}
      <div className="mt-16 sm:mt-20 mb-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 ">
        <div className="flex flex-col items-start">
          <p className="font-medium text-lg text-[#4848FF] dark:text-white/35">
            <span
              onClick={() => router.push("/terms-and-conditions")}
              className="hover:text-[#0b0b0d] dark:hover:text-white cursor-pointer"
            >
              Copyright
            </span>
          </p>
          <p className="font-medium text-lg text-[#4848FF] dark:text-white/35">
            <span
              onClick={() => router.push("/privacy-policy")}
              className="hover:text-[#0b0b0d] dark:hover:text-white cursor-pointer"
            >
              Privacy
            </span>
          </p>
          <p className="font-medium text-lg text-[#4848FF] dark:text-white/35">
            All rights reserved
          </p>
        </div>

        <h4 className="font-semibold text-xl text-[#4848FF] dark:text-white/35 text-center">
  © {new Date().getFullYear()} — DEVENTIA
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
