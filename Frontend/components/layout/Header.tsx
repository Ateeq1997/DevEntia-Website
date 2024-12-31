"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai"; 
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/logoImg.gif";
import MobileMenu from "./MobileNav";
import PortfolioDropDown from "./PortfolioDropdown";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/Services" },
    { title: "Portfolio", path: "/Our-Portfolio" },
    { title: "About Us", path: "/About-us" }
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
      className={`fixed top-0 left-0 w-full bg-transparent bg-opacity-50 text-white z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              unoptimized
              src={logoImg}
              width={100}
              alt="deventia logo"
              className="w-auto h-8 lg:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex lg:flex items-center justify-between flex-grow ml-12 ">
            {/* Menu Items */}
            <ul className="flex space-x-8 xl:space-x-12 md:space-x-4 h-full  ">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() =>
                    item.title === "Portfolio" && setIsDropdownVisible(true)
                  }
                  onMouseLeave={() =>
                    item.title === "Portfolio" && setIsDropdownVisible(false)
                  }
                >
                  <Link
                    href={item.path}
                    className="flex items-center text-white hover:text-gray-300 transition-colors duration-200 text-sm xl:text-base"
                  >
                    {item.title}
                    {item.title === "Portfolio" && (
                      <AiOutlineDown className="ml-1" /> // Add Chevron Down icon
                    )}
                  </Link>
                  {/* Dropdown for Portfolio */}
                  {/* && isDropdownVisible */}
                  {item.title === "Portfolio"  && isDropdownVisible && (
                    <div className="absolute -left-6 top-0 mt-2  rounded-full shadow-lg p-4 z-50">
                      <PortfolioDropDown />
                    </div>
                  )}
                </div>
              ))}
            </ul>

            {/* Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/Careers" className="hover:text-gray-300">
                Careers
              </a>
              <div className="px-4 py-2 md:px-2 md:py-1 bg-white text-black rounded-full hover:bg-gray-300">
                <Link href={"/Contact-us"} className="text-black">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
      <hr className="bg-[#FFFFFF17] h-1 -z-10 lg:w-[86%] w-[100%] m-auto opacity-5 absolute bottom-0" />
    </nav>
  );
};

export default Header;
