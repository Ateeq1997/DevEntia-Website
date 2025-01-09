"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/logoImg.gif";
import MobileMenu from "./MobileNav";
import PortfolioDropDown from "./PortfolioDropdown";
import { MdOutlineArrowOutward } from "react-icons/md";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/Services" },
    { title: "Portfolio", path: "" },
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
      className={`fixed top-0  w-full bg-transparent bg-opacity-50 text-white z-40 transition-transform duration-300 navbar-container  lg:!flex  pt-2 text-xs 1100px:text-sm 1300px:text-base max-w-[calc(1750px+5%)] mx-auto ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container px-[5%] lg:px-[5%] py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image
                unoptimized
                src={logoImg}
                width={100}
                alt="deventia logo"
                className="w-auto h-8 lg:h-10"
              />
            </Link>
          </div>

          <div className="hidden md:flex lg:flex items-center justify-between flex-grow ml-12">
            <ul className="flex space-x-8 xl:space-x-12 md:space-x-4 h-full">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className={`relative group ${item.title === "Portfolio" ? "pb-4" : ""
                    }`}
                  onMouseEnter={() => item.title === "Portfolio" && setIsDropdownVisible(true)}
                  onMouseLeave={() => item.title === "Portfolio" && setIsDropdownVisible(false)}
                >
                  <Link
                    href={item.path}
                    className="flex items-center text-white hover:text-gray-300 transition-colors duration-200 text-sm xl:text-base"
                    onClick={() => item.title === "Portfolio" && setIsDropdownVisible(!isDropdownVisible)}
                  >
                    {item.title}
                    {item.title === "Portfolio" && (
                      <AiOutlineDown className="ml-1" />
                    )}
                  </Link>
                  {item.title === "Portfolio" && isDropdownVisible && (
                    <div
                      className="absolute -left-6 top-5 mt-2 rounded-full shadow-lg p-4 z-50"
                    >
                      <PortfolioDropDown />
                    </div>
                  )}
                </div>
              ))}
            </ul>
              
              
                <Link
                  href={'/Contact-us'}
                  className="flex items-center gap-2 flex-wrap  hover:bg-white hover:scale-110 transition-all duration-700 ease-in-out w-fit"
                >
                  <p className="p-2 bg-white text-black  flex items-center gap-2">
                    Let&apos;s Talk
                  </p>
                  <div className="p-2 bg-white flex items-center justify-center">
                    <MdOutlineArrowOutward size={25} color="black" />
                  </div>
                </Link>
      
          </div>

          <MobileMenu />
        </div>
      </div>
      <hr className="bg-[#FFFFFF17] h-1 -z-10 lg:w-[86%] w-[100%] m-auto opacity-5 absolute bottom-0" />
    </nav>
  );
};

export default Header;