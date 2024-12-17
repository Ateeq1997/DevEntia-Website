"use client";
import Image from "next/image";
import React from "react";
import logoImg from "@/assets/images/logoImg.gif";
// import { euroStyle } from '@/utils/fonts';
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { LuSlack } from "react-icons/lu";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  return (
    <footer className="p-[5%] bg-[#161616] z-10 relative">
      <div className="absolute bottom-0 left-0 footer-bg-img"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        <div>
          <h4 className="font-semibold text-xl text-white/35 mb-4">
            Navigation
          </h4>
          <div className="flex flex-col">
            <Link
              className="text-lg font-medium hover:underline hover:text-[#7471E6]"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-lg font-medium hover:underline hover:text-[#7471E6]"
              href="/Services"
            >
              Services
            </Link>
            <Link
              className="text-lg font-medium hover:underline hover:text-[#7471E6]"
              href="About-us"
            >
              About Us
            </Link>
            <Link
              className="text-lg font-medium hover:underline hover:text-[#7471E6]"
              href="/Our-Portfolio"
            >
              Our Portfolio
            </Link>
            <Link
              className="text-lg font-medium hover:underline hover:text-[#7471E6]"
              href="/Careers"
            >
              Careers
            </Link>
            <Link
              className="text-lg font-medium hover:underline hover:text-[#7471E6]"
              href="Contact-us"
            >
              Contacts
            </Link>
            <Link
              className="text-lg font-medium hover:underline hover:text-[#7471E6]"
              href="terms-and-conditions"
            >
              Terms & Conditions
            </Link>
            <Link
              className="text-lg font-medium hover:underline hover:text-[#7471E6]"
              href="privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-xl text-white/35 mb-4">
            Contact us
          </h4>
          <a
            className="text-lg font-medium hover:underline hover:text-[#7471E6]"
            rel="stylesheet"
            href="tel:+92316-5910564"
          >
            +92316-5910564
          </a>
          <h4 className="font-semibold text-xl text-white/35 my-4 md:mt-20">
            Follow us
          </h4>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61555020486889&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 hover:border-[#7471E6] rounded-full hover:scale-125 transition-all duration-700 ease-in-out hover:text-[#7471E6]"
            >
              <FaSquareFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/deventia-tech-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 hover:border-[#7471E6] rounded-full hover:scale-125 transition-all duration-700 ease-in-out hover:text-[#7471E6]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/deventiatechlimited?igsh=NWhhdmFpczVzeHBm&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 hover:border-[#7471E6] rounded-full hover:scale-125 transition-all duration-700 ease-in-out hover:text-[#7471E6]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://deventialimited.slack.com/join/shared_invite/zt-2nreu7n87-U3thaVfp3_M0PwzRV73OKg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 hover:border-[#7471E6] rounded-full hover:scale-125 transition-all duration-700 ease-in-out hover:text-[#7471E6]"
            >
              <LuSlack />
            </a>
          </div>
          <h4 className="font-semibold text-xl text-white/35 my-4 mt-8">
            Location
          </h4>

          <a
            className="text-lg font-medium mt-4"
            rel="stylesheet"
            href="Mansehra, kpk 21300, PK"
          >
            Siran Plaza Mansehra, Khyber Pakhtunkhwa, Pakistan
          </a>
        </div>
        <div className="">
          <a
            href="mailto:prosper@deventiatech.com"
            className="block mt-12 hover:underline hover:text-[#7471E6]"
          >
            prosper@deventiatech.com
          </a>
          <h4 className="font-semibold text-xl text-white/35 my-4 md:mt-20">
            Let’s chat
          </h4>
          <div className="flex gap-2">
            <a
              href="https://wa.me/+923165910564"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 hover:border-[#7471E6] rounded-full hover:scale-125 transition-all duration-700 ease-in-out hover:text-[#7471E6]"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 hover:border-[#7471E6] rounded-full hover:scale-125 transition-all duration-700 ease-in-out hover:text-[#7471E6]"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
        <Image
          src={logoImg}
          alt="deventia logo"
          width={125}
          unoptimized
          className="mr-0 ml-auto"
        />
      </div>
      <div className="mt-20 mb-8">
        <p className="font-medium text-lg text-white/35">
          <span
            onClick={() => router.push("/terms-and-conditions")}
            className="hover:text-white cursor-pointer"
          >
            Copyright
          </span>
        </p>
        <p className="font-medium text-lg text-white/35">
          <span
            onClick={() => router.push("/privacy-policy")}
            className="hover:text-white cursor-pointer"
          >
            Privacy
          </span>
        </p>
        <p className="font-medium text-lg text-white/35 ">
          All rights reserved
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <h4 className="font-semibold text-xl text-white/35 text-center ml-auto mr-0">
          © 2024 — DEVENTIA
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
