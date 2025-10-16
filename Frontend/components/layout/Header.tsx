"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/logoImg.gif";
import MobileMenu from "./MobileNav";
import PortfolioDropDown from "./PortfolioDropdown";
import { MdOutlineArrowOutward } from "react-icons/md";
import ThemeToggle from "@/app/ThemeToggle/ThemeToggle";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/Services" },
    { title: "Portfolio", path: "" },
    { title: "About Us", path: "/About-us" },
   
    
  ];

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-transform duration-300 navbar-container lg:!flex pt-2 text-xs 1100px:text-sm 1300px:text-base max-w-[calc(1750px+5%)] mx-auto
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        bg-white/90 text-black dark:bg-transparent dark:text-white transition-colors duration-500`}
    >
      <div className="container px-[5%] lg:px-[5%] py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between w-full md:hidden px-4">
  {/* Logo */}
  <Link href={"/"}>
    <Image
      unoptimized
      src={logoImg}
      width={100}
      alt="deventia logo"
      className="w-auto h-8"
    />
  </Link>
          </div>

{/* Desktop Navigation */}
<div className="hidden md:flex lg:flex items-center justify-between flex-grow ml-12">
  <ul className="flex space-x-8 xl:space-x-12 md:space-x-4 h-full">
    {menuItems.map((item) => (
      <div
        key={item.title}
        className={`relative group ${item.title === "Portfolio" ? "pb-4" : ""}`}
        onMouseEnter={() => item.title === "Portfolio" && setIsDropdownVisible(true)}
        onMouseLeave={() => item.title === "Portfolio" && setIsDropdownVisible(false)}
      >
        <Link
          href={item.path}
          className="flex items-center hover:text-[#7471E6] transition-colors duration-200 text-sm xl:text-base"
          onClick={() => item.title === "Portfolio" && setIsDropdownVisible(!isDropdownVisible)}
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

  <div className="flex flex-row items-center gap-10">
    <Link
      href={"/Careers"}
      className="flex items-center gap-2 flex-wrap w-fit hover:text-[#7471E6]"
    >
      Careers
    </Link>
   <Link
  href={"/Contact-us"}
  className="flex items-center gap-2 flex-wrap transition-all duration-700 ease-in-out w-fit"
>
  <p className="p-2 px-4 
     bg-[#4848FF] text-white            /* Light mode */
     dark:bg-white dark:text-black      /* Dark mode */
     flex items-center gap-2">
    Contact Us
  </p>
</Link>


    {/* Theme Toggle - Desktop */}
    <div className="hidden md:flex items-center gap-2 flex-wrap transition-all duration-700 ease-in-out w-fit">
      <ThemeToggle />
    </div>
  </div>
</div>

{/* Mobile Theme Toggle */}
<div className="md:hidden flex items-center ml-1 -mt-2">
  <ThemeToggle />
</div>


          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>

      <hr className="bg-[#FFFFFF17] h-1 -z-10 lg:w-[86%] w-[100%] m-auto opacity-5 absolute bottom-0" />
    </nav>
  );
};

export default Header;
