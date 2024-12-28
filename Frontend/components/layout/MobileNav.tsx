"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import logoImg from "@/assets/images/logoImg.gif";
import Image from "next/image";

interface MenuItem {
  title: string;
  link?: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/Services" },
  { title: "Careers", link: "/Careers" },
  {
    title: "Our Portfolio",
    submenu: [
      { title: "RS Global Ties", link: "/Our-Portfolio/Projects/RS-Global-Ties" },
      { title: "Private CPA", link: "/Our-Portfolio/Projects/Private-CPA" },
      { title: " ISA Consulting", link: "/Our-Portfolio/Projects/ISA" },
      { title: "Make Well Life", link: "/Our-Portfolio/Projects/Makewell.life" },
      { title: "See All", link: "/#see-all-services" },
    ],
  },
  { title: "About Us", link: "/About-us" },
  { title: "Contact Us", link: "/Contact-us" },
];

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const renderMenuItem = (item: MenuItem) => {
    if (item.submenu) {
      return (
        <div key={item.title} className="w-full md:hidden ">
          <button
            onClick={() => toggleSubmenu(item.title)}
            className="flex items-center justify-between w-full py-4 px-6 text-gray-200 hover:bg-gray-800 transition-colors duration-200"
          >
            <span>{item.title}</span>
            <FaChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${
                activeSubmenu === item.title ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeSubmenu === item.title ? "max-h-64" : "max-h-0"
            }`}
          >
            {item.submenu.map((subItem) => (
              <a
                key={subItem.title}
                href={subItem.link}
                className="block py-3 px-8 text-gray-300 hover:bg-gray-800 transition-colors duration-200"
              >
                {subItem.title}
              </a>
            ))}
          </div>
        </div>
      );
    }

    return (
      <a
        key={item.title}
        href={item.link}
        className="block py-4 px-6 text-gray-200 hover:bg-gray-800 transition-colors duration-200"
      >
        {item.title}
      </a>
    );
  };

  return (
    <div className="font-sans md:hidden lg:hidden bg-black">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 justify-end"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        onClick={() => setIsOpen(false)}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-transparent text-white"
      >
        <div className="w-6 h-6 relative">
          <span
            className={`block w-full h-0.5 bg-current absolute transition-all duration-300 ${
              isOpen ? "rotate-45 top-3" : "top-1"
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-current absolute top-3 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-current absolute transition-all duration-300 ${
              isOpen ? "-rotate-45 top-3" : "top-5"
            }`}
          />
        </div>
      </button>

      <nav
        className={`fixed top-0 left-0 h-screen w-full bg-black transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center px-2 py-6">
          <Image src={logoImg} alt="Leventia" className="h-8 " />
        </div>

        <div className="divide-y mt-10 divide-gray-700 bg-black">
          {menuItems.map(renderMenuItem)}
        </div>
      </nav>
    </div>
  );
};

export default MobileSidebar;
