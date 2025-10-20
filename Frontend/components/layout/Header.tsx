"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import logoImg from "@/assets/images/logoImg.png";
import logoImg1 from "@/assets/images/blacklogo.png";
import MobileMenu from "./MobileNav";
import PortfolioDropDown from "./PortfolioDropdown";
import ThemeToggle from "@/app/ThemeToggle/ThemeToggle";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/Services" },
    { title: "Portfolio", path: "" },
    { title: "About Us", path: "/About-us" },
  ];

  // ✅ Detect theme (dark/light)
  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDarkMode(html.classList.contains("dark"));
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    setIsDarkMode(html.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  // ✅ Hide/Show navbar on scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-transform duration-300 navbar-container lg:!flex pt-2 
      text-[0.95rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.05rem] 
      max-w-[calc(1750px+5%)] mx-auto
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      bg-white/90 text-black dark:bg-transparent dark:text-white transition-colors duration-500`}
    >
      <div className="container px-[5%] lg:px-[5%] py-4">
        <div className="flex items-center justify-between w-full flex-wrap">
          {/* ✅ Logo */}
          <Link href={"/"} className="flex items-center flex-shrink-0">
            <div className="relative w-[125px] h-10 sm:w-[110px] sm:h-9 xs:w-[95px] xs:h-8 -translate-y-[6px]">
              <Image
                unoptimized
                src={isDarkMode ? logoImg : logoImg1}
                alt="deventia logo"
                fill
                className={`object-contain transition-transform duration-300 ${
                  isDarkMode ? "scale-[2.25]" : "scale-[1.65]"
                }`}
                priority
              />
            </div>
          </Link>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:flex lg:flex items-center justify-between flex-grow ml-12">
            <ul className="flex space-x-8 xl:space-x-12 md:space-x-6">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className={`relative group ${item.title === "Portfolio" ? "pb-4" : ""}`}
                  onMouseEnter={() =>
                    item.title === "Portfolio" && setIsDropdownVisible(true)
                  }
                  onMouseLeave={() =>
                    item.title === "Portfolio" && setIsDropdownVisible(false)
                  }
                >
                  <Link
                    href={item.path}
                    className="flex items-center hover:text-[#7471E6] transition-colors duration-200"
                    onClick={() =>
                      item.title === "Portfolio" &&
                      setIsDropdownVisible(!isDropdownVisible)
                    }
                  >
                    {item.title}
                    {item.title === "Portfolio" && <AiOutlineDown className="ml-1" />}
                  </Link>
                  {item.title === "Portfolio" && isDropdownVisible && (
                    <div className="absolute -left-6 top-5 mt-2 rounded-full shadow-lg p-4 z-50">
                      <PortfolioDropDown />
                    </div>
                  )}
                </div>
              ))}
            </ul>

<div className="flex flex-row items-center gap-8 flex-wrap -translate-y-[10px]">
  <Link
    href={"/Careers"}
    className="hover:text-[#7471E6] transition-all duration-300"
  >
    Careers
  </Link>

  <Link href={"/Contact-us"} className="transition-all duration-500">
    <p
      className="p-2 px-2 bg-[#4848FF] text-white
         dark:bg-white dark:text-black
         flex items-center justify-center gap-2 font-medium"
    >
      Contact Us
    </p>
  </Link>

  {/* Theme Toggle - Desktop */}
  <div className="hidden md:flex items-center">
    <ThemeToggle />
  </div>
</div>

          </div>

          {/* ✅ Mobile Right Side */}
          <div className="flex items-center md:hidden gap-3">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
<hr className="bg-[#FFFFFF20] h-[1px] w-full opacity-40 absolute bottom-0 left-0 right-0" />

    </nav>
  );
};

export default Header;
